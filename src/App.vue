<template>
  <div id="app" ref="appVue">
    <HeaderComp />
    <NavComp/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import NavComp from '@/components/NavComp.vue';

export default {
  components: {
    HeaderComp,
    FooterComp,
    NavComp,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
}

a {
  text-decoration: none;
}

.center {
  padding: 0 calc(50% - 570px);
}

.header {
  height: 100px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  box-shadow: 0 0 10px 0 #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__left {
  display: flex;
  align-items: center;
}
.header span {
  font-family: "Lato", sans-serif;
  font-size: 27px;
  font-weight: 900;
  color: #f16d7f;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
}
.header__img {
  margin-right: 13px;
}
.header__right {
  display: flex;
  align-items: center;
}
.header__form {
  display: flex;
  align-items: center;
}
.header__cart {
  display: flex;
  margin-right: 26px;
  position: relative;
}
.header__cart:hover .cart__drop {
  display: flex;
}

.cart_position {
  position: absolute;
  top: -7px;
  left: 23px;
  border: 1px solid #f16d7f;
  background-color: #f16d7f;
  border-radius: 50%;
  width: 19px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.cart__drop {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: absolute;
  top: 30px;
  left: -30px;
  /* display: none; */
  border: 1px solid #e8e8e8;
  flex-direction: column;
  z-index: 1;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 37px;
  font-family: "Lato", sans-serif;
  font-size: 27px;
  font-weight: 300;
  color: #222222;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
}

.order-position h3 {
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
}

.order-position p {
  margin-top: 12px;
  font-size: 12px;
  color: #f16d7f;
}

.order-position {
  width: 230px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img__order-position {
  width: 70px;
}

.fa-star {
  font-size: 12px;
  color: #e4af48;
}

.fa-star-half-alt {
  font-size: 12px;
  color: #e4af48;
}

.fa-times-circle {
  font-size: 16px;
  color: #c0c0c0;
}

.total-text {
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
}

.drop_button {
  display: flex;
  flex-direction: column;
}

.drop_button a {
  margin-top: 11px;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #eaeaea;
  width: 225px;
  height: 50px;
  line-height: 50px;
}

.drop_button a:hover {
  color: #f16d7f;
  border: 1px solid #f16d7f;
}

.browse {
  border-left: 1px solid #E8E8E8;
  border-top: 1px solid #E8E8E8;
  border-bottom: 1px solid #E8E8E8;
  border-radius: 3px 0 0 3px;
  height: 38px;
  width: 87px;
  background-color: #f8f8f8;
  text-align: center;
  font-size: 14px;
  color: #222222;
  letter-spacing: 0.03em;
  line-height: 32px;
  position: relative;
}

.drop {
  background-color: #ffffff;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 8px;
  display: none;
  position: absolute;
  top: 46px;
  border: 1px solid #e8e8e8;
  z-index: 1;
}

.drop__flex {
  width: 234px;
  margin-right: 46px;
}

.drop__flex:last-of-type {
  margin-right: 0;
}

.drop__h3 {
  font-size: 14px;
  color: #232323;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 8px;
  margin-top: 8px;
}

.drop__link {
  font-size: 14px;
  color: #646464;
  letter-spacing: 0.03em;
  line-height: 28px;
}

.drop__link:hover {
  color: #f16d7f;
}

.drop__ul {
  list-style-type: none;
}

.menu__list {
  position: relative;
}

.menu__list:hover .drop {
  display: flex;
}

.drop_last {
  right: 0;
}

.drop__browse {
  display: flex;
  top: 30px;
  width: 150px;
  z-index: 1;
}

.browse:hover {
  background-color: #e1e1e1;
  cursor: default;
}

.browse-summary {
  display: block;
  outline: none;
}

.browse-summary::-webkit-details-marker {
  display: none;
}

.browse-summary::after {
  content: "";
  padding-left: 8px;
  font-size: 14px;
  color: #838383;
  font-family: FontAwesome, sans-serif;
}

.browse[open] > .browse-summary::after {
  content: "";
}

.header__form input {
  height: 38px;
  width: 281px;
  border: 1px solid #E8E8E8;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
}

.browse__button {
  width: 36px;
  height: 38px;
  border-bottom: 2px solid #E8E8E8;
  border-top: 1px solid #E8E8E8;
  border-right: 1px solid #E8E8E8;
  border-radius: 0 3px 3px 0;
  border-left: 0;
  outline: none;
}

.browse__button:hover {
  background-color: #e1e1e1;
  cursor: default;
}

.button {
  width: 130px;
  height: 38px;
  background-color: #f16d7f;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 34px;
  display: block;
}

.button img {
  padding-left: 8px;
}

.button:hover {
  box-shadow: 0 3px 5px 1px rgba(33, 33, 33, 0.35);
}

.button:active {
  box-shadow: 0 1px 5px 1px rgba(33, 33, 33, 0.35);
}

.nav {
  height: 51px;
  background-color: #fff;
}

.menu__link {
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  text-align: left;
  text-transform: uppercase;
  padding: 17px 20px 17px 20px;
  display: block;
}

.menu__link:hover {
  border-bottom: 3px solid #ef5b70;
}

.menu__link:active {
  color: #f16d7f;
}

.menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

.promo {
  height: 613px;
  background-color: #e8e8e8;
  background-image: url(/img/promo.png);
  background-repeat: no-repeat;
  background-position: center -51px;
  display: flex;
  align-items: center;
}

.promo__h2 {
  font-size: 60px;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.03em;
  line-height: 45px;
  margin-bottom: 15px;
}

.promo__h3 {
  font-size: 40px;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.03em;
  line-height: 31px;
}

.promo__color {
  font-size: 40px;
  font-weight: 900;
  color: #f16d7f;
  text-align: right;
  letter-spacing: 0.03em;
}

.promo__content {
  border-left: 12px solid #f16d7f;
  padding-left: 12px;
}

.category {
  height: 823px;
  margin-top: 98px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-content: space-between;
}

.category__top-left {
  width: 560px;
  height: 542px;
  background-image: url(/img/1130.png);
}

.category__bottom-left {
  width: 560px;
  height: 261px;
  background-image: url(/img/1144.png);
}

.category__top-rigth {
  width: 560px;
  height: 261px;
  background-image: url(/img/1136.png);
}

.category__bottom-rigth {
  width: 560px;
  height: 542px;
  background-image: url(/img/1137.png);
}

.badge {
  margin-top: 26px;
  background-color: #fff;
  display: inline-block;
  padding: 16px 20px 16px 20px;
  font-size: 18px;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 18px;
}

.badge span {
  margin-top: 13px;
  display: block;
  font-size: 30px;
  font-weight: 900;
  color: #f16d7f;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.product {
  margin-top: 100px;
}

.product h2 {
  font-size: 30px;
  font-weight: bold;
  color: #222222;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 25px;
}

.product h3 {
  font-size: 14px;
  color: #9f9f9f;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 14px;
  padding-top: 16px;
}

.product__bloks {
  padding-top: 60px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product__bloks-men {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 260px;
  position: relative;
  margin-bottom: 39px;
  cursor: pointer;
}

.card:hover .product__add {
  display: flex;
}

.card:hover {
  box-shadow: 0 1px 8px 0 #555;
}

.card:hover .product__img {
  filter: brightness(50%);
}

.product__img {
  height: 280px;
}

.product__name {
  font-size: 13px;
  color: #222222;
  text-align: center;
  text-transform: uppercase;
}

.product__price {
  font-size: 16px;
  font-weight: bold;
  color: #f16d7f;
  text-transform: uppercase;
  margin-top: 17px;
}

.product__content {
  padding: 19px 15px;
}

.product__add {
  position: absolute;
  top: 97px;
  left: 70px;
  height: 39px;
  width: 123px;
  border: 1px solid #ffffff;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  display: none;
  justify-content: center;
  align-items: center;
}

.product__add:hover {
  box-shadow: 0 0 5px #fff;
}

.product > .button {
  width: 212px;
  margin: 19px auto 0 auto;
}

.banner {
  width: 1140px;
  height: 529px;
  display: flex;
  margin: 113px auto 97px auto;
}

.banner__left {
  width: 767px;
  height: 100%;
  background-image: url(/img/1314.png);
  padding-top: 146px;
  padding-left: 39px;
}

.banner__right {
  width: 373px;
  height: 100%;
  background-color: #222224;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.banner__horizontal {
  margin-top: 110px;
  height: 341px;
  background-color: #222224;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.baner__badge h3 {
  font-size: 54px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.03em;
}

.baner__badge span {
  font-size: 54px;
  font-weight: bold;
  color: #f16d7f;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.baner__badge p {
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.banner__right-block {
  width: 294px;
}

.banner__right-block img {
  float: left;
}

.banner__right-block h2 {
  padding-top: 7px;
  margin-left: 78px;
  font-size: 20px;
  font-weight: bold;
  color: #fbfbfb;
  text-align: left;
  letter-spacing: 0.03em;
}

.banner__right-block p {
  margin-top: 17px;
  margin-left: 78px;
  font-size: 14px;
  font-weight: 300;
  color: #fbfbfb;
  text-align: left;
  line-height: 24px;
}

.subscribe {
  display: flex;
  background: url(/img/rectangle.png) no-repeat center,
  url(/img/2194.png) no-repeat center;
  height: 438px;
}

.subscribe figure {
  padding-top: 111px;
}

.subscribe figure img {
  float: left;
}

.blockquote {
  margin-left: 111px;
  padding-top: 12px;
  width: 426px;
  font-size: 16px;
  font-style: italic;
  color: #222224;
  letter-spacing: 0.03em;
  line-height: 26px;
}

.name_autor {
  margin-top: 19px;
  margin-left: 111px;
  font-size: 16px;
  font-weight: bold;
  color: #f16d7f;
  letter-spacing: 0.03em;
  line-height: 26px;
}

.name_autor span {
  font-size: 12px;
  font-weight: 300;
  color: #222224;
  text-align: left;
  letter-spacing: 0.03em;
  line-height: 14px;
}

.subscribe-pagination {
  margin-left: 111px;
}

.subscribe-pagination a {
  display: inline-block;
  width: 38px;
  height: 30px;
  border-bottom: 4px solid #d6d6d6;
  margin-right: 13px;
}

.subscribe-pagination a:hover {
  border-color: #f16d7f;
}

.subscribe_email {
  padding-left: 92px;
  padding-top: 148px;
  border-left: 1px solid #e1e1e1;
}

.subscribe_email h3 {
  font-size: 24px;
  color: #222224;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 54px;
  text-transform: uppercase;
}

.subscribe_email p {
  font-size: 14px;
  color: #222224;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 24px;
}

.subscribe_email form {
  margin-top: 35px;
  display: flex;
}

.subscribe_email form input {
  width: 282px;
  height: 46px;
  background-color: #e1e1e1;
  font-size: 14px;
  padding: 0 28px 0 28px;
  border: 1px solid #e1e1e1;
  border-radius: 30px 0 0 30px;
  color: #222224;
  outline: none;
}

.subscribe_email form button {
  width: 104px;
  height: 46px;
  background-color: #f16d7f;
  font-size: 14px;
  border: 1px solid #f16d7f;
  border-radius: 0 30px 30px 0;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.03em;
  outline: none;
}

.subscribe_email form button:hover {
  background-color: #e1e1e1;
  border: 4px solid #f16d7f;
  color: #f16d7f;
  font-weight: bold;
}

.footer {
  margin-top: 109px;
  display: flex;
  justify-content: space-between;
}

.menu__footer {
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.footer p {
  width: 433px;
  font-size: 14px;
  font-weight: 300;
  color: #898989;
  letter-spacing: 0.03em;
  line-height: 24px;
  padding-top: 29px;
}

.header__footer {
  text-transform: uppercase;
  margin-bottom: 32px;
  color: #f16d7f;
  letter-spacing: 0.03em;
  line-height: 26px;
}

.list__footer a {
  list-style-type: none;
  font-size: 16px;
  color: #898989;
  letter-spacing: 0.03em;
  line-height: 42px;
}

.list__footer a:hover {
  color: #f16d7f;
}

.list__footer a:active {
  color: #848484;
}

.bottom__footer {
  margin-top: 65px;
  height: 79px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom__footer p {
  font-size: 16px;
  color: #7a7a7a;
  letter-spacing: 0.03em;
}

.icons {
  display: block;
  margin-right: 8px;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  line-height: 32px;
  text-align: center;
  color: #b2b2b2;
}

.icons:last-of-type {
  margin-right: 0;
}

.social {
  display: flex;
  justify-content: space-between;
}

.icons:hover {
  background-color: #f16d7f;
  color: #f7f7f8;
}

.icons:active {
  background-color: #b2b2b2;
  color: #f7f7f8;
}

.breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 148px;
  background-color: #f8f3f4;
}

.header__breadcrumb {
  font-size: 24px;
  font-weight: 900;
  color: #f16d7f;
  text-transform: uppercase;
}

.ul__breadcrumb {
  list-style-type: none;
  font-size: 14px;
  font-weight: bold;
  color: #f16d7f;
  text-transform: uppercase;
}

.list__breadcrumb {
  float: left;
  padding-right: 3px;
}

.link__breadcrumb {
  font-size: 14px;
  color: #636363;
  text-transform: uppercase;
}

.filter {
  margin-top: 71px;
  height: 165px;
}

.product__bloks-box {
  width: 848px;
}

.men-block {
  display: flex;
  justify-content: space-between;
}

.ul__nav-left {
  list-style-type: none;
}

.summary__nav-left {
  width: 243px;
  border-bottom: 1px solid #ebebeb;
  border-left: 5px solid #ef5b70;
  font-size: 14px;
  font-weight: bold;
  color: #6f6e6e;
  padding-left: 11px;
  line-height: 37px;
  margin-bottom: 18px;
  text-transform: uppercase;
}

.summary__nav-left:hover {
  color: #ef5b70;
  cursor: default;
}

.summary__nav-left {
  display: block;
  outline: none;
}

.summary__nav-left::-webkit-details-marker {
  display: none;
}

.summary__nav-left::after {
  content: "";
  padding-right: 6px;
  font-size: 14px;
  color: #838383;
  float: right;
  font-family: FontAwesome, sans-serif;
}

.details__nav-left[open] > .summary__nav-left::after {
  content: "";
  color: #ef5b70;
}

.details__nav-left[open] > .summary__nav-left {
  content: "";
  color: #ef5b70;
}

.ul__summary__nav-left {
  list-style-type: none;
}

.list__nav-link {
  font-size: 14px;
  color: #6f6e6e;
  text-align: left;
  line-height: 33px;
}

.list__nav-link:hover {
  color: #ef5b70;
}

.nav-left {
  margin-top: 59px;
}

.bottom-filter {
  background-color: #f3f3f3;
  padding: 10px;
}

.button__filter {
  border: 1px solid #ebebeb;
  outline: none;
  background-color: #fff;
  height: 30px;
  width: 66px;
  font-size: 14px;
  color: #6f6e6e;
  margin-right: -4px;
}

.select__filter {
  overflow: hidden;
  position: relative;
  margin-right: 10px;
}

.select__filter select {
  height: 30px;
  padding-left: 11px;
  border-color: #ebebeb;
  outline: none;
  width: 86px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  color: #6f6e6e;
}

.select__filter:after {
  content: "";
  font-family: FontAwesome, sans-serif;
  color: #6f6e6e;
  padding-right: 9px;
  position: absolute;
  right: 0;
  line-height: 30px;
  pointer-events: none;
  box-sizing: border-box;
}

.top-filter {
  display: flex;
  justify-content: space-between;
  padding-bottom: 41px;
}

.top-filter h3 {
  font-size: 14px;
  font-weight: bold;
  color: #6f6e6e;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.top-filter p {
  font-size: 14px;
  color: #dfdfdf;
  line-height: 26px;
}

.top-filter a {
  font-size: 14px;
  color: #6f6e6e;
  text-align: left;
  padding-left: 3px;
  padding-right: 3px;
}

.top-filter a:first-of-type {
  padding-left: 0;
}

.top-filter a:hover {
  color: #ef5b70;
}

.input-size {
  display: none;
}

.label-size {
  color: #6f6e6e;
  text-transform: uppercase;
  width: 70px;
  margin-bottom: 10px;
  cursor: pointer;
}

.label-size:hover {
  color: #ef5b70;
}

.label-size::before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  border: 1px solid #ebebeb;
  vertical-align: middle;
  margin-right: 9px;
}

.input-size:checked + label::before {
  content: "";
  font-family: fontAwesome, sans-serif;
  font-size: 15px;
  line-height: 10px;
  color: #ef5b70;
}

.div_checkbox {
  width: 50px;
  height: 22px;
}

.size-box {
  display: flex;
  flex-wrap: wrap;
}

.filter-width {
  width: 370px;
}

input[type=range] {
  width: 100%;
}

.price-text {
  display: flex;
  justify-content: space-between;
}

.price-text p {
  font-size: 14px;
  line-height: 26px;
  color: #6f6e6e;
}

.men-pagination {
  height: 44px;
  display: flex;
  justify-content: space-between;
}

.left_pagination {
  list-style-type: none;
  height: 44px;
  width: 261px;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
}

.left_pagination li {
  display: inline-block;
  line-height: 44px;
}

.left_pagination a {
  font-size: 16px;
  color: #c4c4c4;
}

.left_pagination a:hover {
  color: #ef5b70;
}

.view_all {
  height: 44px;
  width: 150px;
  border: 1px solid #ef5b70;
  border-radius: 3px;
  text-align: center;
  line-height: 44px;
  color: #ef5b70;
}

.view_all:hover {
  border-color: #c4c4c4;
  color: #c4c4c4;
}

.slider {
  height: 777px;
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  padding: 0 calc(50% - 840px);
}

.slider a {
  width: 47px;
  height: 47px;
  background-color: #2a2a2a;
  filter: opacity(30%);
  text-align: center;
  line-height: 47px;
  color: #fff;
  font-size: 24px;
  margin: auto 0;
}

.slider a:hover {
  filter: opacity(20%);
}

.slider img {
  margin-top: 11px;
  height: 724px;
  width: 597px;
}

.product_description {
  margin: -86px auto 119px auto;
  width: 1141px;
  border: 1px solid #eaeaea;
  background-color: #fff;
  position: relative;
  padding-bottom: 122px;
}

.product_description h2 {
  font-size: 14px;
  font-weight: bold;
  color: #f16d7f;
  text-transform: uppercase;
  width: 150px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
  margin: 73px auto 0 auto;
}

.border-h3 {
  margin: -1px auto 0 auto;
  width: 63px;
  border-top: 3px solid #ef5b70;
}

.product_description > h3 {
  font-size: 18px;
  font-weight: 900;
  color: #4d4d4d;
  text-align: center;
  text-transform: uppercase;
  margin-top: 17px;
}

.p-description p {
  font-size: 14px;
  font-weight: bold;
  color: #b9b9b9;
  line-height: 24px;
}

.p-description span {
  color: #2f2f2f;
}

.p-description {
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 37px 403px;
}

.description-price {
  font-size: 24px;
  font-weight: bold;
  color: #ef5b70;
  text-align: center;
  line-height: 24px;
}

.main-description {
  font-size: 14px;
  font-weight: 300;
  color: #5e5e5e;
  line-height: 24px;
  width: 625px;
  margin: 67px auto 0 auto;
}

.description-add {
  height: 55px;
  width: 537px;
  border: 1px solid #ef5b70;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #ef5b70;
  margin-top: 28px;
}

.description-add:hover {
  border: 1px solid #eaeaea;
}

.description-add img {
  margin-right: 15px;
}

.description-order {
  height: 213px;
  width: 642px;
  border-top: 1px solid #eaeaea;
  margin: 43px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 63px;
}

.description-order h3 {
  font-size: 14px;
  font-weight: bold;
  color: #2f2f2f;
  margin-bottom: 16px;
}

.description__filter {
  overflow: hidden;
  position: relative;
}

.description__filter select {
  height: 35px;
  padding-left: 11px;
  border-color: #bcbcbc;
  outline: none;
  width: 144px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  color: #6f6e6e;
}

.description__filter:after {
  content: "";
  font-family: FontAwesome, sans-serif;
  color: #bcbcbc;
  padding-right: 9px;
  position: absolute;
  right: 0;
  line-height: 35px;
  pointer-events: none;
  box-sizing: border-box;
}

.like_also {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 72px;
}

.card_also:hover {
  box-shadow: 0 0 5px 0;
}

.also_img {
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  width: 261px;
  height: 290px;
}

.also_img a {
  width: 100%;
  text-align: center;
}

.like_also_h3 {
  width: 100%;
  font-size: 24px;
  font-weight: 900;
  color: #4d4d4d;
  text-align: center;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 72px;
}

.shopping_cart {
  margin-top: 90px;
  margin-bottom: 63px;
}

.header_cart {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
}

.header_cart_item {
  width: 629px;
  display: flex;
  justify-content: space-between;
}

.header_cart h3 {
  font-size: 13px;
  font-weight: bold;
  color: #222222;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

.cart_item {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid #eaeaea;
}

.product_position {
  display: flex;
}

.position_property {
  margin-left: 21px;
}

.position_property h3 {
  font-size: 13px;
  color: #222222;
  text-align: right;
  text-transform: uppercase;
  margin-top: 13px;
}

.position_property a h3:hover {
  color: #ef5b70;
}

.position_property p {
  font-size: 13px;
  color: #575757;
  line-height: 20px;
  margin-top: 38px;
}

.position_property p span {
  font-weight: 300;
  color: #6f6e6e;
  line-height: 20px;
}

.product_position img {
  width: 100px;
  height: 115px;
}

.cart_position_item {
  width: 629px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.cart_position_item p {
  font-size: 13px;
  color: #656565;
  text-transform: uppercase;
}

.cart_quantity {
  width: 54px;
  height: 30px;
  text-align: center;
  border: 1px solid #eaeaea;
  outline: none;
}

.cart_button {
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
}

.cart_button a {
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-align: left;
  text-transform: uppercase;
  border: 1px solid #eaeaea;
  height: 50px;
  padding: 0 39px;
  line-height: 50px;
}

.cart_button a:hover {
  color: #ef5b70;
  border: 1px solid #ef5b70;
}

.create_order {
  margin-bottom: 79px;
  display: flex;
  justify-content: space-between;
}

.shipping_adress {
  width: 355px;
  height: 268px;
}

.create_order h3 {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.select__country {
  overflow: hidden;
  position: relative;
}

.select__country select {
  height: 45px;
  padding-left: 17px;
  border-color: #eaeaea;
  outline: none;
  width: 355px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 13px;
  font-weight: 300;
  color: #b1b1b1;
  margin-bottom: 20px;
}

.select__country:after {
  content: "";
  font-family: FontAwesome, sans-serif;
  color: #6f6e6e;
  padding-right: 9px;
  position: absolute;
  right: -350px;
  top: -10px;
  line-height: 45px;
  pointer-events: none;
  box-sizing: border-box;
}

.create_order label input::placeholder {
  color: #b1b1b1;
}

.state {
  width: 355px;
  height: 45px;
  border: 1px solid #eaeaea;
  padding-left: 17px;
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 20px;
  outline: none;
}

.postcode {
  width: 355px;
  height: 45px;
  border: 1px solid #eaeaea;
  padding-left: 17px;
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 20px;
  outline: none;
}

.create_order button {
  padding: 0 15px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  font-size: 11px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
  cursor: pointer;
}

.create_order button:hover {
  color: #ef5b70;
  border: 1px solid #ef5b70;
}

.discount {
  width: 355px;
  height: 184px;
}

.discount p {
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  padding: 6px 0 24px 0;
}

.checkout {
  width: 360px;
  height: 214px;
  background-color: #f5f3f3;
  padding: 42px;
}

.checkout_total {
  border-bottom: 1px solid #e2e2e2;
}

.sub {
  font-size: 11px;
  color: #4a4a4a;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 14px;
}

.sub span {
  padding-left: 30px;
}

.grand {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.grand span {
  font-size: 16px;
  font-weight: bold;
  color: #f16d7f;
  text-transform: uppercase;
  padding-left: 30px;
}

.checkout a {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  height: 50px;
  width: 273px;
  background-color: #f16d7f;
  display: block;
  line-height: 50px;
  margin-top: 17px;
}

.checkout a:hover {
  color: #ef5b70;
  border: 1px solid #ef5b70;
  background-color: #f5f3f3;
}

/*# sourceMappingURL=style.css.map */

</style>
