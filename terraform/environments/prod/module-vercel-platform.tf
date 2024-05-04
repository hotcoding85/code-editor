module "vercel-platform" {
  source = "../../modules/vercel-platform"

  depends_on = [module.auth0]

  vercel_team_id = var.VERCEL_TEAM_ID

  next_public_platform_host = var.NEXT_PUBLIC_PLATFORM_HOST
  platform_api_host         = var.PLATFORM_API_HOST

  auth0_issuer_base_url = var.AUTH0_ISSUER_BASE_URL
  auth0_domain          = var.AUTH0_DOMAIN

  auth0_cypress_username = var.AUTH0_CYPRESS_USERNAME
  auth0_cypress_password = var.AUTH0_CYPRESS_PASSWORD
  auth0_secret           = var.AUTH0_SECRET

  auth0_web_client_id     = module.auth0.web_client.id
  auth0_web_client_secret = module.auth0.web_client.client_secret
}
