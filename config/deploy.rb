set :application, "NeilRenicker.com"
set :repository, "https://github.com/neilrenicker/neilrenicker.com.git"
set :scm, :git

set :copy_strategy, :checkout
set :keep_releases, 3

ssh_options[:forward_agent] = true
set :ssh_options, { :forward_agent => true }
set :deploy_via, :remote_cache

set :branch, "master"
set :deploy_to, "/home/174321/domains/neilrenicker.com/html"

role :web, "205.186.187.212"
role :app, "205.186.187.212"
role :db,  "205.186.187.212", :primary => true

set :user, "neilrenicker.com"

set :use_sudo, false

after "deploy:update", "deploy:cleanup"
after "deploy", "deploy:grunt"

namespace :deploy do

  desc "This is here to overide the original :restart"
  task :restart, :roles => :app do
    # do nothing but overide the default
  end

  desc "Run Grunt"
  task :grunt, :roles => :app do
   run "cd #{release_path}; bundle && npm install && grunt dist"
  end

end

after 'deploy:update_code' do
  run "cd #{release_path}; chmod -R 777 *"
end