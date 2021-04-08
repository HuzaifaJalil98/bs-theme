// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import 'bootstrap-colorpicker'
import 'ckeditor'
import 'echart'
import 'export-table'
import 'lightgallery'
import 'multiselect'
import 'tinymce'
import 'ion-rangeslider'

import './index'

// import './app.min.js'
// import './chart.min.js'
import './admin.js'
import './pages/index.js'
import './pages/charts/jquery-knob.js'
import './pages/sparkline/sparkline-data.js'
import './pages/medias/carousel.js'
