<template>

  <div id="hello">


    <div class="columns">
      <div class="column">
      </div>
      <div class="column">
        <div>
          <h1>
            <strong>Injecting Netlify build variables into Vue</strong>
          </h1>
        </div>

        <img src="../assets/logo.png" width="50" style="margin-top: 15px;" />

        <div class="box" style="margin-top: 30px; background: #eee">
          <article class="media">

            <div class="media-content">
              <div class="content">

                <div>Current environment:
                  <span class="key">{{msg}}</span>

                </div>
                <div> API key:
                  <span class="key">{{apiKey}}</span>
                </div>

              </div>

            </div>
          </article>
        </div>

        <div v-html="step1"></div>




      </div>
      <div class="column">
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HelloWorld",
    mounted: function () { },
    data() {
      return {
        msg: process.env.NODE_ENV,
        apiKey: process.env.API_KEY
      };
    }
  };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }

  #hello {
    text-align: center;
  }

  h1 {
    font-size: 24px;
  }

  .key {
    font-weight: bold;
    color: #3e9b50;
  }
</style>