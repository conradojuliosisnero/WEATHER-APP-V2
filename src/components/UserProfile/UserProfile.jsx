"use client";
import { useState } from "react";
import {
  User,
  Mail,
  MapPin,
  Thermometer,
  Edit2,
  Camera,
  Save,
} from "lucide-react";
import Image from "next/image";
import { useSubmint } from "@/hooks/useSubmint";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Ana García",
    email: "ana.garcia@example.com",
    location: "Madrid, España",
    temperatureUnit: "Celsius",
    profilePicture: "/placeholder.svg?height=200&width=200",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { data, error, loading, submintData } = useSubmint();

  const handleSave = async (e) => {
    e.preventDefault();
    await submintData("", userData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="h-48 w-full md:w-48 relative">
              <Image
                className="h-full w-full object-cover md:h-full md:w-48"
                src={userData.profilePicture}
                alt="Foto de perfil"
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL={userData.profilePicture}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              {isEditing && (
                <label
                  htmlFor="profile-picture"
                  className="absolute bottom-2 right-2 bg-white rounded-full p-2 cursor-pointer"
                >
                  <Camera className="h-6 w-6 text-blue-500" />
                  <input id="profile-picture" type="file" className="hidden" />
                </label>
              )}
            </div>
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Perfil de Usuario
              </h1>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center text-blue-500 hover:text-blue-600"
                >
                  <Edit2 className="h-5 w-5 mr-1" />
                  Editar
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  <Save className="h-5 w-5 mr-1" />
                  Guardar
                </button>
              )}
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                ) : (
                  <span>{userData.name}</span>
                )}
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-2" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                ) : (
                  <span>{userData.email}</span>
                )}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={userData.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                ) : (
                  <span>{userData.location}</span>
                )}
              </div>
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 text-gray-500 mr-2" />
                {isEditing ? (
                  <select
                    name="temperatureUnit"
                    value={userData.temperatureUnit}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                  </select>
                ) : (
                  <span>Unidad de temperatura: {userData.temperatureUnit}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
