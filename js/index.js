const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
}

const setLogo = () => {
  const logo = document.getElementById('logo-img')
  logo.setAttribute('src', siteContent['nav']['img-src'])
}

const setATags = () => {
  const aTagsInNavHeader = document.querySelectorAll('header > nav > a')
  let i = 1
  aTagsInNavHeader.forEach((el) => {
    el.innerText = siteContent.nav[`nav-item-${i}`]
    i++
  })
}

const setImgSrc = () => {
  document
    .querySelector('#logo-img')
    .setAttribute('src', siteContent['nav']['img-src'])
}

const setH1 = () => {
  const domText = siteContent.cta.h1
  const domTextSplitUp = domText.split(' ')
  const newSplit = []

  for (let i = 0; i < domTextSplitUp.length - 1; i++) {
    newSplit.push(`${domTextSplitUp[i]}<br>`)
  }

  newSplit.push(`${domTextSplitUp[domTextSplitUp.length - 1]}`)
  document.querySelector('div.cta-text >h1').innerHTML = newSplit.join(' ')
}

const setBtnText = () => {
  document.querySelector('div.cta-text > button').innerText =
    siteContent.cta.button
}

const setImgSrc2 = () => {
  document
    .querySelector('#cta-img')
    .setAttribute('src', siteContent.cta['img-src'])
}

const seth4AndText = () => {
  const mainContent = siteContent[`main-content`]
  let target = document.querySelectorAll('div.text-content')

  //features
  target[0].children[0].innerText = siteContent['main-content']['features-h4']
  target[0].children[1].innerText =
    siteContent['main-content']['features-content']
  //about
  target[1].children[0].innerText = siteContent['main-content']['about-h4']

  target[1].children[1].innerText = siteContent['main-content']['about-content']

  //services
  target[2].children[0].innerText = siteContent['main-content']['services-h4']

  target[2].children[1].innerText =
    siteContent['main-content']['services-content']

  //product
  target[3].children[0].innerText = siteContent['main-content']['product-h4']

  target[3].children[1].innerText =
    siteContent['main-content']['product-content']

  //vision
  target[4].children[0].innerText = siteContent['main-content']['vision-h4']

  target[4].children[1].innerText =
    siteContent['main-content']['vision-content']
}

const setFinalImg = () => {
  document
    .querySelector('#middle-img')
    .setAttribute('src', siteContent['main-content']['middle-img-src'])
}

const setContact = () => {
  const newAddress = siteContent['contact']['address'].replace(
    'Street',
    'Street<br>'
  )

  document.querySelector('section.contact').children[0].innerText =
    siteContent['contact']['contact-h4']
  document.querySelector('section.contact').children[1].innerHTML = newAddress
  document.querySelector('section.contact').children[2].innerText =
    siteContent['contact']['phone']
  document.querySelector('section.contact').children[3].innerText =
    siteContent['contact']['email']
}

const setFooter = () => {
  document.querySelector('footer > p').innerText = siteContent.footer.copyright
}

//FUNCTION CALLS

setLogo()
setATags()
setImgSrc()
setH1()
setBtnText()
setImgSrc2()
seth4AndText()
setFinalImg()
setContact()
setFooter()
