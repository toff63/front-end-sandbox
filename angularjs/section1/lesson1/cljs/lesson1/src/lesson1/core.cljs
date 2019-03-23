(ns ^:figwheel-always lesson1.core
    (:require [reagent.core :as rg]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (rg/atom {:text "Hello world!"}))

(defn <form>  []
  (let [{:keys [text]} @app-state]
   [:div
    [:h1 text]
    [:input {:type "text"
             :value text
             :on-change (fn [event] (swap! app-state assoc :text (-> event .-target .-value)))}]
     ]))

(defn mount-root [state]
  (rg/render 
    [<form>]
    ;[:p "this is static content"]
    (.getElementById js/document "app")))

(defn init! []
  (mount-root app-state))

(init!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
(init!)
)
