<script>
    import {
      Card,
      CardTitle,
      CardSubtitle,
      Row,
      Col,
    } from 'svelte-materialify/src';
  
    const resources = [
      { name: 'PBBG.com', subTitle: 'Game Listing Site', imgUrl: '/pbbg_logo.png', link: 'https://pbbg.com' },
      { name: 'PBBG Discord', subTitle: 'Community Hub', imgUrl: '/discord_logo.png', link: 'https://chat.pbbg.com' },
      { name: 'PBBG Subreddit', subTitle: 'News and Updates', imgUrl: '/reddit_logo2.png', link: 'https://reddit.com/r/pbbg' },
    ];
</script>

<h4>Community Resources</h4>
<p>
    The following is a list of community resources you can use to connect with <b>hundreds</b> of other players.
</p>

<div class="d-flex justify-center mt-4 mb-4">
    <div class="rounded elevation-2 theme--dark pa-4" style="flex-grow:1;max-width:400px;">
        {#each resources as rss, i}
        <a href="{rss.link}" target="_blank">
            <Card class={rss.color} hover>
                <Row>
                <Col cols={8}>
                    <CardTitle>{rss.name}</CardTitle>
                    <CardSubtitle>{rss.subTitle}</CardSubtitle>
                </Col>
                <Col cols={4}><img src="{rss.imgUrl}" alt="cover" /></Col>
                </Row>
            </Card>
        </a>
        <br />
        {/each}
    </div>
</div>

<style>
    h4 {
        padding-top: 50px;
        font-size: 2rem;
    }

    img {
        height: 100px;
        width: 100px;
    }

    a  {
        text-decoration: none;
    }
</style>