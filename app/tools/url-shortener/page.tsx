'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function URLShortenerPage() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const shortenUrl = async () => {
    if (!longUrl) {
      toast({
        title: "Error",
        description: "Please enter a URL to shorten.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      // Replace this with your actual API call
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl }),
      })

      if (!response.ok) throw new Error('Failed to shorten URL')

      const data = await response.json()
      setShortUrl(data.shortUrl)
      toast({
        title: "Success",
        description: "URL shortened successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    if (!shortUrl) return

    try {
      await navigator.clipboard.writeText(shortUrl)
      toast({
        title: "Copied!",
        description: "Short URL copied to clipboard.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy URL. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
      
      <Card className="w-full max-w-md mx-auto shadow-soft">
        <CardHeader>
          <CardTitle className="font-display">Shorten Your URL</CardTitle>
          <CardDescription>Enter a long URL to get a shortened version.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              placeholder="Enter your long URL here" 
              className="border-neutral-300" 
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <Button 
              className="w-full bg-primary-600 hover:bg-primary-700 text-white"
              onClick={shortenUrl}
              disabled={isLoading}
            >
              {isLoading ? 'Shortening...' : 'Shorten URL'}
            </Button>
          </div>
        </CardContent>
        {shortUrl && (
          <CardFooter className="flex flex-col items-start">
            <p className="text-sm text-neutral-500 mb-2">Shortened URL:</p>
            <div className="flex w-full">
              <Input readOnly value={shortUrl} className="mr-2 bg-neutral-50" />
              <Button 
                variant="outline" 
                className="border-primary-300 text-primary-600 hover:bg-primary-50"
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
