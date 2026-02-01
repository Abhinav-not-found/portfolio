import ImageKit from "imagekit"

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

export const uploadImage = async (banner) => {
  if (!banner) return null

  if (!(banner instanceof File)) {
    throw new Error("Invalid banner")
  }
  if (!banner.type.startsWith("image/")) {
    throw new Error("Invalid banner type")
  }

  const bytes = await banner.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const upload = await imagekit.upload({
    file: buffer,
    fileName: `blog-banner-${Date.now()}`,
    folder: "/Portfolio/Blog_Banners",
  })

  return upload.url
}
