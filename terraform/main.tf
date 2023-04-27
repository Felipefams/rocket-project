terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "example" {
  name      = "rocket-project"
  git_repository = {
    type = "github"
    repo = "felipesilva-plank/rocket-project"
  }
}