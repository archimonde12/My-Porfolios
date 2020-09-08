let text={}
text.flip3DCSSText=`/* FLIP 3D */

.container.flip_3d {
    width: 1000px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 70vh;
    max-height: 400px;
    align-items: center;
}

@media only screen and (max-width: 1000px) {
    .container.flip_3d {
        padding: 20px 0;
        height: 120vh;
        max-height: 700px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
    }
    .project__container {
        height: 130vh;
        max-height: 1000px;
    }
    .project__container>h1 {
        font-size: 2rem;
        text-align: center;
    }
}

.container.flip_3d .card {
    position: relative;
    width: 300px;
    height: 200px;
}

.container.flip_3d .card .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

.container.flip_3d .card .face img {
    max-width: 100px;
}

.container.flip_3d .card .face h3 {
    width: 100px;
    margin: 10px 0 0;
    text-transform: capitalize;
    text-align: center;
    font-size: 1.5rem;
}

.container.flip_3d .card .face.face1 {
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transform-origin: bottom;
}

.container.flip_3d .card:hover .face.face1 {
    transform: translateY(-100%) rotateX(90deg);
    background: #ff0057;
}

.container.flip_3d .card .face.face2 {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transform-origin: top;
    transform: translateY(100%) rotateX(90deg);
}

.container.flip_3d .card:hover .face.face2 {
    transform: translateY(0%) rotateX(0);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}`
text.flip3DHTMLText=`  <div class="container flip_3d">
<div class="card">
    <!-- Every card have two face:face 1 and face 2 -->
    <div class="face face1">
        <div class="content">
            <img src="asset/images/sketch.png" alt="">
            <h3>design</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna metus, cursus ac
                libero in, eleifend imperdiet tellus. Fusce placerat id mauris at auctor. </p>
        </div>
    </div>
</div>
<div class="card">
    <div class="face face1">
        <div class="content">
            <img src="asset/images/data.png" alt="">
            <h3>Code</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna metus, cursus ac
                libero in, eleifend imperdiet tellus. Fusce placerat id mauris at auctor. </p>
        </div>
    </div>
</div>
<div class="card">
    <div class="face face1">
        <div class="content">
            <img src="asset/images/startup.png" alt="">
            <h3>Launch</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna metus, cursus ac
                libero in, eleifend imperdiet tellus. Fusce placerat id mauris at auctor. </p>
        </div>
    </div>
</div>
`



const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };