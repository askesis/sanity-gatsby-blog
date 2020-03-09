export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e666a645639903c19b910d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fis2kuia',
                  apiId: '9de27d20-4be3-4272-b4e2-c26fdf7709ee'
                },
                {
                  buildHookId: '5e666a64f4d3d835d092c4e1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2cvbvcct',
                  apiId: 'c6f0130f-3e6b-4fb0-9c7a-9f5c0533344e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/askesis/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2cvbvcct.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
