"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const handleGiveTest = () => {
    window.open("https://bgrintra/survey_hr/Survey_user.aspx?id=1199", "_blank")
  }

  const handleShowResult = () => {
    window.open("https://bgrintra/Quiz/result_user.aspx", "_blank")
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/rhino.jpg?height=1300&width=900"
          alt="Dashboard Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="text-center space-y-8">
          {/* Dashboard Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Dashboard</h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">Welcome to your testing dashboard</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleGiveTest}
              size="lg"
              className="w-48 h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Give Test
            </Button>

            <Button
              onClick={handleShowResult}
              size="lg"
              className="w-48 h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Show Result
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-white/80 text-sm">
            <p>Click on the buttons above to navigate</p>
          </div>
        </div>
      </div>
    </div>
  )
}
