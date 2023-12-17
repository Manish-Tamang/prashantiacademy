export default {
    name: 'teacherGallery',
    title: 'Teachers Gallery',
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
  