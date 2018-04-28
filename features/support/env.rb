require 'capybara/cucumber'
#require 'capybara/session'

BASE_URL = "localhost:8080"

Capybara.default_driver = :selenium
Capybara.run_server = false
Capybara.default_selector = :css
Capybara.default_max_wait_time = 30
Capybara.ignore_hidden_elements = false
Capybara.app_host = "http://localhost:8080"
#Capybara.app = BASE_URL
