<template>
  <div>
    <SanityBlocks :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script lang="jsx">
import { SanityBlocks } from "sanity-blocks-vue-component";

export default {
  props: {
    blocks: Array,
  },
  components: {
    SanityBlocks,
  },
  setup(props) {
    const blocks = props.blocks; // Sanity block text
    const serializers = {
      types: {
        figure: ({ node }) => (
          <figure>
            <img src={this.$urlFor(node).auto("format").url()} alt={node.alt} />
            <figcaption>{node.caption}</figcaption>
          </figure>
        ),
      },
    };
    return { blocks, serializers };
  },
};
</script>
