<script>
  import { Card, CardText, CardActions, Button } from 'svelte-materialify/src';
</script>

<section id="built-by">
    <div class="d-flex justify-center mt-4 mb-4">
        <Card outlined style="max-width:300px;">
          <div class="pl-4 pr-4 pt-3">
            <span class="text-overline"> BUILT BY </span>
            <br />
            <span class="text-h5 mb-2">asdfdelta</span>
            <br />
          </div>
          <CardText>
            <img src="\7eJSElLs_400x400.png" alt="asdfdelta profile" />
          </CardText>
          <CardActions>
            <div id="built-by-actions">
                <a href="https://twitter.com/asdfdelta"><Button rounded outlined>Twitter</Button></a>
                <a href="https://blog.pbbg.com/author/christopher/"><Button rounded outlined>Blog</Button></a>
            </div>
          </CardActions>
        </Card>
      </div>
</section>

<style>
    #built-by {
        margin-top: 50px;
    }

    img {
        width: 200px;
    }

    #built-by-actions {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>