<script>
    export let year;
</script>

<div>
    <span class="accent-bg"></span>
    <span id="header-text" class="accent-bg"><slot /></span>
    <span id="header-right"></span>
</div>

<style>
	div {
		color: var(--primary-text-color);
		text-transform: uppercase;
        font-size: 3em;
        line-height: 1.7em;
        font-weight: 100;
        display: flex;
    }

    div span {
        flex-grow: 1;
    }

    #header-right {
        flex-grow: 3;
    }

    .accent-bg {
        background-color: var(--primary-accent-color);
    }

    #header-text {
        text-align: right;
        padding-right: 20px;
    }

</style>