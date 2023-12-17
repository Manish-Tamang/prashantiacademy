export default {
    name: 'banner',
    title: 'Banner Images',
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
  