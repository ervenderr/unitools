'use client'

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { saveAs } from 'file-saver';

export default function BackgroundRemover() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {'image/*': ['.png', '.jpg', '.jpeg', '.gif']},
    multiple: false,
    onDragEnter: () => {},
    onDragOver: () => {},
    onDragLeave: () => {}
  });

  const removeBackground = async () => {
    if (!selectedImage) return;

    try {
      const response = await fetch('/api/remove-background', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: selectedImage.split(',')[1], // Remove the "data:image/png;base64," part
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to remove background: ${errorData.message}`);
      }

      const data = await response.json();
      setProcessedImage(data.image);
    } catch (error) {
      console.error('Error removing background:', error);
      alert(`Failed to remove background. ${error.message}`);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      saveAs(processedImage, 'processed_image.png');
    }
  };

  const handleTryAnother = () => {
    setSelectedImage(null);
    setProcessedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Background Remover</h1>
      <p className="mb-6">Upload an image or drag and drop to remove its background.</p>
      <div className="flex items-center justify-center w-full mb-6">
        <div {...getRootProps()} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <input {...getInputProps()} id="dropzone-file" className="hidden" />
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Original Image:</h2>
          <Image src={selectedImage} alt="Original" width={300} height={300} className="mx-auto" />
        </div>
      )}
      <button
        onClick={removeBackground}
        disabled={!selectedImage}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 mb-6"
      >
        Remove Background
      </button>
      {processedImage && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Processed Image:</h2>
          <Image src={processedImage} alt="Processed" width={300} height={300} className="mx-auto mb-4" />
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Download
            </button>
            <button
              onClick={handleTryAnother}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}