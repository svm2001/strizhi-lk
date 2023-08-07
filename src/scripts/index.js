import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb'

import { about } from "./components/about";
import { popup } from "./components/popup";
import { auth } from "./components/auth";
import { header } from "./components/header";
import { dropdown } from "./components/dropdown";
import { search } from "./components/search";
import { select2 } from "./components/select2";
import { itemsCounter } from "./components/itemsCounter";
import { sendNotification } from "./components/sendNotification";
import { dateUpdate } from "./components/dateUpdate";
import { notification } from "./components/notification";
import { profile } from "./components/profile";
import { popupValidate } from "./components/popupValidate";



document.addEventListener('DOMContentLoaded', () => {
  about();
  popup();
  auth();
  header();
  dropdown();
  search();
  select2();
  itemsCounter();
  sendNotification();
  dateUpdate();
  notification();
  profile();
  popupValidate();
})
