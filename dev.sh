fancy_echo() {
  printf "\n%b\n" "$1"
}

install_if_needed() {
  local package="$1"

  if [ $(dpkg-query -W -f='${Status}' "$package" 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    sudo aptitude install -y "$package";
  fi
}

#!/usr/bin/env bash

trap 'ret=$?; test $ret -ne 0 && printf "failed\n\n" >&2; exit $ret' EXIT
set -e

fancy_echo "Updating system packages ..."
  if command -v aptitude >/dev/null; then
    fancy_echo "Using aptitude ..."
  else
    fancy_echo "Installing aptitude ..."
    sudo apt-get install -y aptitude
  fi

  sudo aptitude update

fancy_echo "Installing git ..."
  install_if_needed git

fancy_echo "Installing vim ..."
  install_if_needed vim-gtk

fancy_echo "Installing tmux ..."
  install_if_needed tmux

fancy_echo "Installing curl ..."
  install_if_needed curl

fancy_echo "Installing zsh ..."
  install_if_needed zsh

fancy_echo "Installing mosh ..."
  install_if_needed mosh

fancy_echo "Installing docker ..."
  install_if_needed docker

fancy_echo "Installing python-pip ..."
  install_if_needed python-pip

fancy_echo "Changing your shell to zsh ..."
  chsh -s $(which zsh)

fancy_echo "Installing rcm ..."
  sudo add-apt-repository ppa:martin-frost/thoughtbot-rcm
  sudo aptitude update
  install_if_needed rcm
  
fancy_echo "Installing dropbox ..."
  cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
  ~/.dropbox-dist/dropboxd

fancy_echo "Installing dropbox ..."
  dropbox start -i
