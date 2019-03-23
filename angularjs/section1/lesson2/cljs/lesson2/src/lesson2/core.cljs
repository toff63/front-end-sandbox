(ns ^:figwheel-always lesson2.core
    (:require
              [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"
                          :model {}}))

(defn hello-world []
  [:h1 (:text @app-state)]
  )

(declare 
  form
    form-input
    submit
  debug
         )

(defn form []
  [:div
   [:form 
    (form-input "name" "Name" "text")
    (form-input "email" "Email" "email")
    (form-input "password" "Password" "password")
    (submit)
    ]
   (debug)])

(defn form-input [model-field label input-type]
  [:div.form-group
    [:label {:for model-field} label]
    [:input.form-control {:type input-type
                          :value (get (:model @app-state) model-field)
                          :id model-field
                          :on-change (fn [event] (swap! app-state assoc-in [:model model-field] (-> event .-target .-value)))}]])

(defn submit []
  [:div.form-group
   [:button {:class "btn btn-primary"
             :on-click (fn [event] (do
                                     (.log js/console "Hey, I have subimtted")
                                     (.log js/console (.toString (:model @app-state)))))} 
    "Register"]])

(defn debug []
  (let [{:keys [model]} @app-state]
    [:pre (.toString model)]))

(reagent/render-component 
  ;[hello-world]
  [form]
  (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

