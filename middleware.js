import { NextResponse } from 'next/server';

export function middleware(request) {
  const { host } = request.headers;
  const url = request.nextUrl.clone();

  // Detectar subdomínio
  const subdomain = host?.split('.')[0];

  // Se é localhost ou não tem subdomínio detectável, deixa passar
  if (!host?.includes('mateusfernando.com')) {
    return NextResponse.next();
  }

  // Mapear subdomínios para idiomas
  const langMap = {
    'en': 'en',
    'pt': 'pt',
  };

  const detectedLang = langMap[subdomain];

  if (detectedLang) {
    // Adicionar header com o idioma detectado
    const response = NextResponse.next();
    response.headers.set('x-detected-lang', detectedLang);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
