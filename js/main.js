$('.nav, .home, .about, .resume, .project, .contact').hide();

$(document).ready(function() {
  loading_screen.finish();
  $('body > .inner').css('display', 'block');
  //particlesJS.load('particles-js', '../js/particlesjs-config.json');

  var options = {
    strings: ['Hi,^500 I\'m Daniel.'],
    typeSpeed: 35
  };

  var options1 = {
    strings: ['Welcome to my portfolio.'],
    typeSpeed: 35,
    startDelay: 2000
  };

  var typed = new Typed('.title', options);
  var typed = new Typed('.subtitle', options1);

  $('.home').show();

  $('.menu').click(() => {
    if ($('.nav').hasClass('slideInDown')) {
      $('.nav').removeClass('slideInDown');
      $('.nav').addClass('slideOutUp');
      $('.menu').attr("src", "../portfolio/css/images/menu.png");
    } else {
      $('.nav').removeClass('slideOutUp');
      $('.nav').addClass('slideInDown');
      $('.nav').show();
      $('.menu').attr("src", "../portfolio/css/images/close.png");
    }
  });

  /*
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setClearColor("#242424");
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  let sphere = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshLambertMaterial({color: "white"});
  let mesh = new THREE.Mesh(sphere, material);

  const light = new THREE.PointLight("white", 1, 1000);
  light.position.set(0, 10, 10);
  scene.add(light);

  let render = function() {
    requestAnimationFrame(renderer);
    renderer.render(scene, camera);
  }

  document.addEventListener('mousemove', (event) => {
    mesh.position.x = (window.innerWidth / 2 - event.clientX)/-80;
    mesh.position.y = (window.innerHeight / 2 - event.clientY)/80;
    renderer.render(scene, camera);
  });

  scene.add(mesh);

  render();
  */

});
