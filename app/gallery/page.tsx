export default function Gallery() {
  const images = [
    {
      src: "/images/bhaktapur.jpg",
      alt: "School Building Exterior",
      ratio: "landscape",
    },
    {
      src: "/images/Gorey1.jpg",
      alt: "Classroom",
      ratio: "portrait",
    },
    {
      src: "/images/sports-yellowhouse.jpg",
      alt: "Yellow House",
      ratio: "square",
    },
    {
      src: "/images/hari-sir.jpg",
      alt: "Library",
      ratio: "square",
    },
    {
      src: "/images/winner.jpg",
      alt: "Gymnasium",
      ratio: "landscape",
    },
    {
      src: "/images/maam.jpg",
      alt: "Cafeteria",
      ratio: "portrait",
    },
    {
      src: "/images/pratima.jpg",
      alt: "Auditorium",
      ratio: "square",
    },
    {
      src: "/images/adityabatch.jpg",
      alt: "Graduation",
      ratio: "portrait",
    },
    {
      src: "/images/vai.jpg",
      alt: "Graduation",
      ratio: "square",
    },
  ]

  const getImageClasses = (ratio: string, index: number) => {
    switch (ratio) {
      case "landscape":
        return "md:col-span-2 aspect-[16/9]"
      case "portrait":
        return "md:row-span-2 aspect-[9/16]"
      case "square":
        return "aspect-square"
      default:
        return "aspect-square"
    }
  }

  const getGridPlacement = (ratio: string, index: number) => {
    // Smart placement logic to fill gaps
    switch (ratio) {
      case "landscape":
        // Landscape takes 2 columns, place at start of row
        return ""
      case "portrait":
        // Portrait takes 2 rows, try to place in gaps
        return ""
      case "square":
        // Square fills single cell, place in any gap
        return ""
      default:
        return ""
    }
  }

  const getImageFitClass = (ratio: string) => {
    switch (ratio) {
      case "landscape":
        return "object-fill" // Stretch to fill landscape cells
      case "portrait":
        return "object-fill" // Stretch to fill portrait cells
      case "square":
        return "object-fill" // Stretch to fill square cells
      default:
        return "object-fill"
    }
  }

  const getImageScaleClass = (ratio: string) => {
    switch (ratio) {
      case "landscape":
        return "" // No zoom for landscape
      case "portrait":
        return "scale-150" // Zoom for portrait
      case "square":
        return "scale-150" // Zoom for square
      default:
        return "scale-150"
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>

      <p className="text-gray-700 leading-relaxed">
        Explore our photo gallery showcasing the vibrant learning environment, dedicated teachers, and memorable moments 
        at Prashanti Academy. These images capture the essence of our educational community and the spirit of excellence 
        that defines our school.
      </p>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2">

        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg break-inside-avoid">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

        ))}
      </div>
    </div>
  )
}
