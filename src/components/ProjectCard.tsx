import React from 'react';
import { Project } from '../types/projects';

interface ProjectCardProps extends Project {}

export function ProjectCard({ title, description, imageUrl, services, details, modelImages }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="space-y-2 mb-4 text-sm text-gray-500">
          <p><strong>Cliente:</strong> {details.client}</p>
          <p><strong>Fecha:</strong> {details.date}</p>
          <p><strong>Ubicación:</strong> {details.location}</p>
        </div>
        {modelImages && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {modelImages.map((img, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={img} 
                  alt={`Modelo 3D ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}