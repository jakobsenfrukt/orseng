<template>
  <section class="project-grid">
    <ProjectItem
      v-for="project in $static.projects.edges.slice(0, limit)"
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
import ProjectItem from '@/components/projects/ProjectItem'

export default {
  components: {
    ProjectItem
  },
  props: {
    limit: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style lang="scss" scoped>
.project-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: var(--spacing);
  margin: 0 auto;
}
</style>