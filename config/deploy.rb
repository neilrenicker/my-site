set :domain, "neilrenicker.com"
set :user, "neilrenicker.com"

set :application, "NeilRenicker.com"

# use your local repository as the source
set :repository, "https://github.com/neilrenicker/neilrenicker.com.git"

server "#{domain}", :app, :web, :db, :primary => true

set :deploy_via, :copy
set :copy_exclude, [".git", ".DS_Store"]
set :scm, :git
set :branch, "master"
# set this path to be correct on yoru server
set :deploy_to, "/domains/neilrenicker.com/html"
set :use_sudo, false
set :keep_releases, 3
set :git_shallow_clone, 1

ssh_options[:paranoid] = false

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