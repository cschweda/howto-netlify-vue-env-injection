<template>

  <div id="hello">


    <div class="columns">
      <div class="column">
      </div>
      <div class="column">
        <div>
          <h1>
            <strong>Inject Netlify's build environment variables into Vue via Webpack</strong>
          </h1>
        </div>

        <img src="../assets/logo.png" width="50" style="margin-top: 15px;" />

        <div class="box" style="margin-top: 30px; background: #eee">
          <article class="media">

            <div class="media-content">
              <div class="content">

                <h4 style="margin-top: 20px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 8px;">App-specific build variables</h4>

                <div>NODE_ENV:
                  <br>
                  <span class="key">{{msg}}</span>

                </div>
                <div class="spacer">API_KEY:
                  <br>
                  <span class="key">{{apiKey}}</span>
                </div>
                <h4 style="margin-top: 20px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 8px;">Netlify pre-defined examples</h4>

                <div>URL:
                  <br>
                  <span class="key">{{url}}</span>

                </div>

                <div class="spacer">DEPLOY_URL:
                  <br>
                  <span class="key">{{deployUrl}}</span>

                </div>

                <div class="spacer">
                  REPOSITORY_URL:
                  <br>
                  <span class="key">{{respositoryUrl}}</span>

                </div>




              </div>

            </div>
          </article>
        </div>

        <a style="margin-top: 30px" class="button is-light" href="https://github.com/cschweda/Netlify-Vue-env-injection">
          <i class="fab fa-github"></i>&nbsp;View Source</a>




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
        apiKey: process.env.API_KEY,
        url: process.env.URL,
        deployUrl: process.env.DEPLOY_URL,
        respositoryUrl: process.env.REPOSITORY_URL
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

  .spacer {
    margin-top: 15px;
  }
</style>