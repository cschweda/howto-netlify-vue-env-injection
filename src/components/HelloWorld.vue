<template>
  <div class="hello">
    Build env test: {{msg}}
    <br> Netlify DEPLOY_URL: {{netlify}}
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted: function () {
      console.log('Mounted')
      console.log(process.env.NODE_ENV)
    },
    data() {
      return {
        msg: process.env.NODE_ENV,
        netlify: process.env.DEPLOY_URL
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>