export class LogoApiService{
    getUrlLogo(source){
        return `https://logo.clearbit.com/${ new URL(source.url).host}`
    }
}

