import {createOffers} from './offers.js';
import {createMapPins} from './pins.js';
const ENTER_KEYCODE = 13;
// const ESC_KEYCODE = 27;

// const onPopupEscPress = function(evt) {
//   if (evt.keyCode === ESC_KEYCODE) {
//     elOfferTemplate.classList.add('hidden');
//   }
// };

const fieldsets = document.querySelectorAll('.ad-form__element');
const elMap = document.querySelector('.map');
const elForm = document.querySelector('.ad-form');
const mainPin = document.querySelector('.map__pin--main');

const initMap = function () {
  elMap.classList.remove('map--faded');
  elForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].disabled = false;
  }

  createMapPins();
  createOffers();

  const mainPins = document.querySelector('.map__pins');
  const pins = document.querySelectorAll('.map__pin');
  const offers = Array.from(document.querySelectorAll('.map__card'));

  function handlePinClick(event) {
    // hide all tab panels
    offers.forEach((offer) => {
      offer.hidden = true;
    });
    // mark all tabs as unselected
    pins.forEach((pin) => {
      // tab.ariaSelected = false;
      pin.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;

    const singleOffer = mainPins.querySelector(`[aria-labelledby="${id}"]`);
    singleOffer.hidden = false;
  }

  pins.forEach((pin) => pin.addEventListener('click', handlePinClick));


  document.addEventListener('input', (event) => {
    const pinss = Array.from(document.querySelectorAll('.map__pin'));
    pins.forEach((pin) => {
      pin.hidden = false;
    });

    const typesPins= mainPins.querySelectorAll(`[aria-type="${event.target.value}"]`);

    if (event.target.value === 'palace') {
      pinss.forEach((pin) => {
        if(pin.dataset.type !== event.target.value) {
          typesPins.hidden = false;
          pin.hidden = true;
        }
      });
    }

    if (event.target.value === 'bungalo') {
      pinss.forEach((pin) => {
        if(pin.dataset.type !== event.target.value) {
          typesPins.hidden = false;
          pin.hidden = true;
        }
      });
    }

    if (event.target.value === 'flat') {
      pinss.forEach((pin) => {
        if(pin.dataset.type !== event.target.value) {
          typesPins.hidden = false;
          pin.hidden = true;
        }
      });
    }

    if (event.target.value === 'house') {
      pinss.forEach((pin) => {
        if(pin.dataset.type !== event.target.value) {
          typesPins.hidden = false;
          pin.hidden = true;
        }
      });
    }

  }, false);


};

mainPin.addEventListener('mousedown', initMap);
mainPin.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    elMap.classList.remove('map--faded');
    elForm.classList.remove('ad-form--disabled');
  }
});


// elPin.addEventListener('click', () => {
//   elOfferTemplate.classList.remove('hidden');
//   //document.addEventListener('keydown', onPopupEscPress);
// });

// elPinTemplate.addEventListener('click', (evt) => {
//   if (evt.keyCode === ENTER_KEYCODE) {
//     elOfferTemplate.classList.remove('hidden');
//     document.addEventListener('keydown', onPopupEscPress);
//   }
// });


