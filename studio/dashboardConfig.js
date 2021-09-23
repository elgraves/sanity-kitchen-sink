export default {
  widgets: [
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
                  buildHookId: '614cd075776a85180925c650',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j6k4fvwf',
                  apiId: 'f6f6b31a-3ff1-48f9-b73b-3cf4d66d8ef4'
                },
                {
                  buildHookId: '614cd075f58e4e1132b57adf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-28cttmi3',
                  apiId: '8db1dc42-303b-421b-8f1a-41442558827c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elgraves/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-28cttmi3.netlify.app', category: 'apps'}
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
