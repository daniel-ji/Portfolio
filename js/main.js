$('.nav, .home, .about, .resume, .project, .contact').hide();

$(document).ready(function() {
  $('.sent').hide();
  $('.box .content, .box .expand').hide();
  let currentClass = 'home';
  VANTA.NET({
    el: `.${currentClass}`,
    color: 0xffffff,
    backgroundColor: 0x2755,
    points: 12.00,
    maxDistance: 22
  })
  //loading stuff
  loading_screen.finish();
  $('body > .inner').css('display', 'block');

  let counter = 0;
  if (!$('input').is(':focus')) {
    $(document).keydown(function(e) {
      if (e.key == 'Escape') {
        navHide();
      } else if (e.key == 'b') {
        counter++;
      } else if (e.key == 't') {
        if (counter == 1) {
          counter++;
        }
      } else if (e.key == 'c') {
        if (counter == 2) {
          counter = 0;
          window.open('https://bitcoin.org', '_blank');
        }
      }
    });
    $(document).keyup(function(e) {
      if (e.key == 'b'|| e.key == 't' || e.key == 'c') {
        counter = 0;
      }
    });
  }

  //particlesJS.load('particles-js', '../js/particlesjs-config.json');
  $('.home').show();
  let options = {
    strings: ['Hi,^500 I\'m Daniel.'],
    typeSpeed: 35,
  };
  const options1 = {
    strings: ['Welcome to my portfolio.'],
    typeSpeed: 35,
    startDelay: 2000
  };
  const typed = new Typed('.home .title', options);
  const typed1 = new Typed('.home .subtitle', options1);
  const classList = [['home', 'about', 'resume', 'contact', 'project'], [0x002755, 0x205c80, 0x068eb8, 0x004463, 0x1E88E5], ['#002755', '#205c80', '#068eb8', '#004463', ' #1E88E5']];

  //nav event listeners
  $('.menu').click(() => {
    if ($('.nav').hasClass('slideInDown')) {
      navHide();
    } else {
      navShow();
    }
  });

  for (let i = 0; i < classList[0].length; i++) {
    $(`#${classList[0][i]}`).click(() => {
      console.log('asdf');
      openOneCloseLast(classList[0][i], currentClass);
      currentClass = classList[0][i];
    });
  }

  //project section
  $('.box').hover(function() {
    $(this).children('.expand').fadeIn();
  }, function() {
    $(this).children('.expand').fadeOut();
  });

  //functions for nav
  function openOneCloseLast(openClassName, closeClassName) {
    if (openClassName != closeClassName) {
      navHide();
      setTimeout(()=>{
        $(`.${closeClassName}`).removeClass('slideInDown');
        $(`.${closeClassName}`).addClass('slideOutDown');
        $(`.${openClassName}`).removeClass('slideOutDown');
        $(`.${openClassName}`).addClass('slideInDown');
        $(`.${openClassName}`).show();
      }, 200);

      for (let i = 0; i < classList[0].length; i++) {
        if (openClassName != classList[0][i] && closeClassName != classList[0][i]) {
          $(`.${classList[0][i]}`).removeClass('slideInDown');
          $(`.${classList[0][i]}`).removeClass('slideOutDown');
          $(`.${classList[0][i]}`).hide();
        } else if (openClassName == classList[0][i]) {
          $('body').css('background-color', classList[2][i]);
          setTimeout(()=> {
            VANTA.NET({
              el: `.${openClassName}`,
              color: 0xffffff,
              backgroundColor: classList[1][i],
              points: 12.00,
              maxDistance: 22
            });
            $('canvas').hide();
            $('canvas').fadeIn();
          }, 1150);

          //setTimeout(()=>{$('canvas').fadeIn();}, 2000);
          setTimeout(() => {$('.nav').css('background-color', classList[2][i]);}, 800);
        }
      }
    } else {
      navHide();
    }
  }
  function navHide() {
    $('.nav').removeClass('slideInDown');
    $('.nav').addClass('slideOutUp');
    $('.menu').attr("src", "../portfolio/css/images/menu.png");
  }
  function navShow() {
    $('.nav').removeClass('slideOutUp');
    $('.nav').addClass('slideInDown');
    $('.nav').show();
    $('.menu').attr("src", "../portfolio/css/images/close.png");
  }


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
