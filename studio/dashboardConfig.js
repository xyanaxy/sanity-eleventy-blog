export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '622bc9fef937886c08122f0f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zidigm7j',
                  apiId: '16f595d1-70ee-4797-b3cf-504a244baaa3'
                },
                {
                  buildHookId: '622bc9fe7a453f6130b7c586',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-s4mo2pk2',
                  apiId: 'bc43f184-8351-4e20-bb52-57acbfe65f91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xyanaxy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-s4mo2pk2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
