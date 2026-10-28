function emailTemplate({ name, code, link, appName }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify your email</title>
</head>
 
<body style="margin:0; padding:0; background-color:#f4f5fb; font-family:Arial, Helvetica, sans-serif;">
 
  <!-- Hidden preview text shown in the inbox list -->
  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
    Your verification code is ${code}. It expires in 10 minutes.
  </div>
 
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f5fb; padding:40px 16px;">
    <tr>
      <td align="center">
 
        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px; background-color:#ffffff; border-radius:16px; overflow:hidden;">
 
          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#4f46e5; padding:36px 24px;">
              <div style="width:64px; height:64px; line-height:64px; background-color:#ffffff; border-radius:50%; font-size:30px; text-align:center; margin:0 auto 16px;">
                ✉️
              </div>
              <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:700;">${appName}</h1>
            </td>
          </tr>
 
          <!-- Body -->
          <tr>
            <td style="padding:40px 36px 16px;">
              <h2 style="margin:0 0 12px; color:#1f2937; font-size:22px;">Verify your email address</h2>
              <p style="margin:0; color:#6b7280; font-size:15px; line-height:1.6;">
                Hi ${name}, welcome aboard! 👋 Confirm your email to finish setting up your account.
              </p>
            </td>
          </tr>
 
          <!-- Button -->
          <tr>
            <td align="center" style="padding:24px 36px;">
              <a href="${link}"
                 style="display:inline-block; background-color:#4f46e5; color:#ffffff; text-decoration:none; font-size:16px; font-weight:bold; padding:14px 36px; border-radius:10px;">
                Verify Email
              </a>
            </td>
          </tr>
 
          <tr>
            <td align="center" style="padding:0 36px 12px;">
              <p style="margin:0; color:#9ca3af; font-size:13px;">or enter this code manually</p>
            </td>
          </tr>
 
          <!-- Code box -->
          <tr>
            <td align="center" style="padding:0 36px 28px;">
              <div style="background-color:#eef2ff; border:2px dashed #a5b4fc; border-radius:12px; padding:16px 24px; display:inline-block;">
                <span style="font-size:32px; font-weight:bold; letter-spacing:8px; color:#4f46e5;">${code}</span>
              </div>
              <p style="margin:12px 0 0; color:#9ca3af; font-size:13px;">This code expires in 10 minutes.</p>
            </td>
          </tr>
 
          <!-- Safety note -->
          <tr>
            <td style="padding:0 36px 36px;">
              <p style="margin:0; padding-top:20px; border-top:1px solid #e5e7eb; color:#9ca3af; font-size:13px; line-height:1.6;">
                Didn't create an account? You can safely ignore this email.
              </p>
            </td>
          </tr>
 
        </table>
 
      </td>
    </tr>
  </table>
 
</body>
</html>
`;
}

module.exports = emailTemplate;

