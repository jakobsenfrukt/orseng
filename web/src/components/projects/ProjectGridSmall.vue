<template>
  <section class="project-grid">
    <ProjectItemSmall
      v-for="project in $static.projects.edges"
      :key="project.id"
      :project="project.node"
    />
  </section>
</template>

<static-query>
query {
  projects: allSanityProject(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        lead
        _rawDescription
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
        themePalette {
          light {
            bgColor {
              hex
              rgb {
                r
                g
                b
              }
            }
            textColor {
              hex
              rgb {
                r
                g
                b
              }
            }
            detailColor {
              hex
              rgb {
                r
                g
                b
              }
            }
          }
          dark {
            bgColor {
              hex
              rgb {
                r
                g
                b
              }
            }
            textColor {
              hex
              rgb {
                r
                g
                b
              }
            }
            detailColor {
              hex
              rgb {
                r
                g
                b
              }
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
import ProjectItemSmall from '@/components/projects/ProjectItemSmall'

export default {
  components: {
    ProjectItemSmall
  }
}
</script>

<style lang="scss" scoped>
.project-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--site-padding-m);
  align-items: flex-start;
  margin: 0 auto;
  padding: var(--site-padding-l);
}

@media (max-width: 1200px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>