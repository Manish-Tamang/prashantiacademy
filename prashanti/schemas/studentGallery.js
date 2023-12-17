export default {
  name: 'studentGallery',
  title: 'Students Gallery',
  type: 'document',
  fields: [
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
