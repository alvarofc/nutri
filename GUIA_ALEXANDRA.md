# Tu web: cómo funciona y cómo hacerla tuya

Esta guía es para ti, Alexandra. No hace falta saber programar: la parte técnica la hace **Claude Code** por ti. Tú solo tienes que crear unas cuentas, aceptar unos traspasos y decirle a Claude qué quieres cambiar.

> **Truco:** si en algún paso te pierdes, abre Claude Code y pégale el paso tal cual, con algo como *«Estoy en este paso de GUIA_ALEXANDRA.md y no sé seguir, ayúdame»*. Claude ha leído esta guía.

---

## 1. Cómo funciona tu web (en 2 minutos)

Tu web tiene cuatro piezas, y cada una hace una sola cosa:

```
  Tú  ──pides un cambio──▶  Claude Code  ──lo guarda en──▶  GitHub  ──avisa a──▶  Vercel  ──publica──▶  www.alexandranutri.com
                                                                                                      ▲
                                            Porkbun (dueño del nombre) dice: «la web está en Vercel   │
                                            y el correo está en Google» ──────────────────────────────┘
```

| Pieza | Qué es | Con qué se compara |
| --- | --- | --- |
| **GitHub** | Guarda todos los archivos de la web: textos, fotos y diseño. Cada cambio queda registrado con su fecha y siempre se puede volver atrás. | Un archivador con historial |
| **Vercel** | Cada vez que algo cambia en GitHub, Vercel monta la web y la publica en 1 o 2 minutos. Si algo sale mal al montarla, **la versión anterior sigue funcionando**. | La imprenta y el escaparate |
| **Porkbun** | Es donde está registrado el nombre `alexandranutri.com`. También guarda la «agenda de direcciones» (DNS), que indica dónde está la web (Vercel) y dónde está tu correo (Google). | El registro de la propiedad del nombre |
| **Claude Code** | Tu ayudante. Le pides cambios en español y él edita la web, te enseña cómo queda y la publica cuando le das el visto bueno. | Tu técnico de confianza |

Hay cosas que **ya son tuyas y no se mueven**: tu correo y tu calendario de Google (Google Workspace), las reservas con pago (Google Calendar + Stripe, explicadas en `BOOKING_SETUP.md`) e Instagram.

---

## 2. Qué pasa a ser tuyo

| Servicio | Hoy | Después | Coste |
| --- | --- | --- | --- |
| **GitHub** (los archivos) | Cuenta de Álvaro | Tu cuenta | Gratis |
| **Vercel** (publicación) | Cuenta de Álvaro | Tu cuenta | Gratis (plan *Hobby*) |
| **Porkbun** (el dominio) | Cuenta de Álvaro | Tu cuenta | Unos 11 $ al año. Ahora está pagado hasta el **25 de julio de 2027**. |

---

## 3. El traspaso, paso a paso

Hazlo **en este orden**. Algunos pasos los tiene que empezar Álvaro (porque hoy todo está a su nombre); en cada paso se indica quién lo hace. **Durante todo el proceso la web sigue funcionando.**

### Paso 1. Crea tus cuentas (tú)

1. **GitHub**: entra en [github.com/signup](https://github.com/signup) y crea una cuenta. **Apunta tu nombre de usuario**, porque Álvaro lo necesitará.
2. **Porkbun**: entra en [porkbun.com](https://porkbun.com), pulsa *Sign Up* y crea una cuenta. Añade una tarjeta de pago. **Apunta tu nombre de usuario y el email con el que te registras.**
3. **Vercel**: entra en [vercel.com/signup](https://vercel.com/signup) y elige **«Continue with GitHub»**. Así quedan conectadas las dos cuentas.

En las tres, activa la **verificación en dos pasos** (la opción suele llamarse *Two-factor authentication* o *2FA*, dentro de *Settings → Security*). Si alguien entrara en estas cuentas, podría quedarse con tu web y tu correo.

Al terminar, **manda a Álvaro** tu usuario de GitHub y tu usuario y email de Porkbun.

### Paso 2. Prepara tu ordenador (tú, con Claude Code)

Abre Claude Code y pégale esto:

> Quiero preparar mi ordenador para editar mi web. Comprueba si tengo instalados git, Node.js (versión 22 o superior) y GitHub CLI (gh). Instala lo que falte y después conéctame a mi cuenta de GitHub con `gh auth login`, explicándome cada paso con palabras sencillas.

Claude te irá guiando. En algún momento se abrirá el navegador para que inicies sesión en GitHub: es normal.

### Paso 3. Los archivos de la web: GitHub (empieza Álvaro, terminas tú)

**Álvaro:** en [github.com/alvarofc/nutri](https://github.com/alvarofc/nutri) va a *Settings → General*, baja hasta *Danger Zone*, pulsa *Transfer ownership* y escribe tu usuario de GitHub.

**Tú:**
1. Te llegará un **email de GitHub**. Ábrelo y **acepta el traspaso enseguida**, porque la invitación caduca en un día.
2. Abre Claude Code y pégale esto (cambia `TU-USUARIO` por tu usuario de GitHub):

   > Descarga mi repositorio https://github.com/TU-USUARIO/nutri en mi carpeta Documentos, instala lo necesario y enséñame la web funcionando en mi ordenador.

3. Claude te dará una dirección del tipo `http://localhost:4321`. Ábrela en el navegador: es **tu web funcionando en tu ordenador**, y solo la ves tú.

### Paso 4. El dominio: Porkbun (empieza Álvaro, terminas tú)

**Álvaro, antes de nada:** haz una captura de pantalla de **todos** los registros DNS del dominio en Porkbun y mándasela a Alexandra. Después mueve el dominio a la cuenta de Alexandra. Para ello, en Porkbun ve a *Domain Management → alexandranutri.com* y usa la opción para pasar el dominio a otra cuenta de Porkbun (necesitarás su usuario y su email de Porkbun). Si no encuentras la opción, el soporte de Porkbun responde muy rápido.

**Tú, cuando el dominio aparezca en tu cuenta:**
1. Entra en *Domain Management → alexandranutri.com → DNS* y comprueba que están **todos** los registros de la captura de Álvaro. Puedes compararlos también con la tabla del [Anexo](#anexo-registros-dns-que-no-se-deben-borrar).
2. Activa la **renovación automática** (*Auto Renew*). **Si el dominio caduca, te quedas sin web y sin correo.**
3. Revisa que los datos de contacto del dominio son los tuyos. Es posible que te llegue un **email para verificar tu dirección**: **haz clic en el enlace**. Si no lo verificas en 15 días, el dominio se suspende.

### Paso 5. La publicación: Vercel (tú, y Álvaro al final)

1. En [vercel.com](https://vercel.com) pulsa **Add New… → Project**.
2. Busca tu repositorio **nutri** y pulsa **Import**. Si no aparece, pulsa *Adjust GitHub App Permissions* y dale acceso.
3. **No cambies nada**: Vercel detecta solo que es una web Astro. Pulsa **Deploy**.
4. Al cabo de un minuto te dará una dirección del tipo `nutri-xxxx.vercel.app`. Ábrela y comprueba que se ve tu web.
5. Ve a **Settings → Domains** y añade `www.alexandranutri.com` y `alexandranutri.com`. La principal debe ser **la de www**, y la otra debe redirigir a ella (Vercel te lo propone al añadirlas).
6. Lo más probable es que Vercel te diga que el dominio **ya está en uso en otra cuenta** (la de Álvaro). Tienes dos opciones:
   - **Opción A, sin cortes:** Vercel te mostrará un registro de tipo **TXT** (con el nombre `_vercel` y un valor que empieza por `vc-domain-verify=`). Cópialo, ve a Porkbun → *DNS* → añade un registro nuevo de tipo TXT con esos datos, y vuelve a Vercel a pulsar *Verify*.
   - **Opción B, más sencilla:** pide a Álvaro que **quite el dominio de su proyecto** (*Settings → Domains → Remove*) y vuelve a añadirlo tú. La web estará caída unos minutos.
7. Si Vercel muestra **«Invalid Configuration»**, te dirá qué valores espera. En Porkbun cambia **solo** el registro **A** (el que tiene el host vacío) y el **CNAME de `www`**. **No toques nunca los registros MX ni TXT.**

**Álvaro, cuando todo funcione:** borra su proyecto antiguo en Vercel.

### Paso 6. Comprobaciones finales (tú)

- [ ] `https://www.alexandranutri.com` se ve bien.
- [ ] `https://alexandranutri.com` (sin www) te lleva a la versión con www.
- [ ] `https://www.alexandranutri.com/en/` muestra la web en inglés.
- [ ] La página de reservas muestra el calendario.
- [ ] **El correo sigue funcionando:** desde otra cuenta, mándate un email a tu dirección del dominio y comprueba que llega.
- [ ] **Prueba un cambio de principio a fin:** pide a Claude que cambie una palabra, publícalo y comprueba que en 1 o 2 minutos aparece en la web. Después pídele que lo deshaga.
- [ ] **Google Workspace:** entra en [admin.google.com](https://admin.google.com) y confirma que tú eres la administradora (*super admin*).
- [ ] **Google Search Console** (sirve para ver cómo te encuentra la gente en Google): si la cuenta la creó Álvaro, pídele que te añada como **propietaria** (*Settings → Users and permissions*).
- [ ] **Stripe:** confirma que la cuenta que cobra las citas es la tuya.

---

## 4. El día a día: cómo cambiar tu web

### Abrir Claude Code en tu web

1. Abre la aplicación **Terminal**.
2. Escribe `cd ~/Documents/nutri` y pulsa Enter.
3. Escribe `claude` y pulsa Enter.

Si usas Claude Code desde la aplicación de escritorio, basta con abrir la carpeta `nutri` que está dentro de Documentos.

### Pedir cambios

Escríbele como hablarías con una persona. Por ejemplo:

- *«Cambia mi número de WhatsApp al +34 600 00 00 00.»*
- *«La valoración inicial ahora cuesta 80 €.»* Recuerda que **también tienes que cambiar el precio en Google Calendar**, que es donde se cobra. Claude te lo recordará.
- *«Quiero publicar un artículo nuevo en el blog. Te paso el texto y la foto.»* (Puedes arrastrar la foto a la ventana.) Claude lo preparará en español y en inglés.
- *«Cambia la foto de la página Sobre mí por esta.»*
- *«En la portada en inglés hay una errata: pone X y debería poner Y.»*

### El ciclo de cada cambio

1. **Pides** el cambio.
2. Claude lo hace y te **enseña cómo queda en tu ordenador** (`http://localhost:4321`). Todavía nadie más lo ve.
3. Si te gusta, le dices **«publícalo»**. Si no, le dices qué quieres distinto.
4. En **1 o 2 minutos** el cambio está en `www.alexandranutri.com`.

### Si algo sale mal

- **No hay prisa.** Si un cambio tiene un error, Vercel no lo publica y la web anterior sigue funcionando.
- Para volver atrás, dile a Claude: *«Deshaz el último cambio que publicamos.»*
- **Emergencia** (la web se ve mal y Claude no está a mano): en Vercel ve a tu proyecto → **Deployments**, elige la versión anterior que funcionaba, abre el menú **⋯** y pulsa **Instant Rollback**. En un minuto vuelve a estar como antes.

---

## 5. Reglas de oro

1. **No borres nunca registros MX ni TXT en Porkbun.** Son los que hacen funcionar tu correo.
2. **Mantén la renovación automática del dominio y la tarjeta al día.** Si el dominio caduca, pierdes la web y el correo.
3. **Activa la verificación en dos pasos** en GitHub, Vercel, Porkbun, Google y Stripe.
4. **No escribas contraseñas en Claude.** Los inicios de sesión se hacen siempre en el navegador.
5. **Revisa antes de publicar.** Claude siempre te enseña el cambio antes de que lo vea nadie.

---

## Anexo: registros DNS que no se deben borrar

Así está configurado el dominio hoy (noviembre de 2026). Si después del traspaso falta alguno, avisa a Álvaro.

| Tipo | Nombre (host) | Valor | Para qué sirve |
| --- | --- | --- | --- |
| A | *(vacío)* | `216.198.79.1` y/o `216.198.79.65` | La web (Vercel) |
| CNAME | `www` | `478c37d9a2059b2e.vercel-dns-017.com` | La web con www (Vercel) |
| MX | *(vacío)* | `smtp.google.com` (prioridad 1) | **Tu correo** (Google) |
| TXT | *(vacío)* | `v=spf1 include:_spf.google.com include:_spf.porkbun.com ~all` | **Tu correo**, para que no llegue como spam |
| TXT | `google._domainkey` | Empieza por `v=DKIM1;k=rsa;p=MIIBIjAN…` | **Tu correo**: firma de Google |
| TXT | *(vacío)* | `google-site-verification=MHDfOe77…` | Demuestra a Google que el dominio es tuyo |
| TXT | *(vacío)* | `google-site-verification=WHvs-iur…` | Demuestra a Google que el dominio es tuyo |

Los valores de la web (A y CNAME) pueden cambiar si Vercel lo pide en el paso 5. Los del correo y los de Google **no se tocan nunca**.
