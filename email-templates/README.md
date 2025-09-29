# MedCamps Email Templates - Implementation Guide

This directory contains professionally designed email templates for all Supabase authentication flows. Each template follows email HTML best practices and maintains consistent MedCamps branding.

## 📧 Available Templates

1. **confirm-signup.html** - Email confirmation for new user registrations
2. **invite-user.html** - Invitation email for new users
3. **magic-link.html** - Passwordless authentication link
4. **change-email.html** - Email address change confirmation
5. **reset-password.html** - Password reset request
6. **reauthentication.html** - Identity verification for sensitive actions

## 🎨 Design Features

- **Responsive Design**: Works perfectly on all devices and email clients
- **MedCamps Branding**: Consistent green colour scheme (#10b981, #059669)
- **Professional Layout**: Clean, modern design with clear call-to-action buttons
- **Accessibility**: Proper semantic HTML and ARIA attributes
- **Email Client Compatible**: Table-based layout with inline styles for maximum compatibility

## 📋 Implementation Instructions

### Step 1: Access Supabase Dashboard

1. Navigate to your Supabase project dashboard
2. Go to **Authentication** → **Email Templates** (or visit the URL shown in your screenshot)
3. You'll see tabs for each email type

### Step 2: Copy Template Code

For each email template:

1. Open the corresponding HTML file from this directory
2. Select and copy **all the HTML code**
3. In the Supabase dashboard, click on the appropriate tab (e.g., "Confirm signup")
4. Paste the HTML code into the **Message body** section
5. Update the **Subject heading** field with the appropriate subject line (see below)

### Step 3: Subject Lines

Use these subject lines for each template:

| Template | Subject Line |
|----------|-------------|
| Confirm signup | Confirm Your Signup - MedCamps |
| Invite user | You've Been Invited to MedCamps |
| Magic Link | Your MedCamps Sign-In Link |
| Change Email Address | Confirm Your Email Change - MedCamps |
| Reset Password | Reset Your MedCamps Password |
| Reauthentication | Reauthentication Required - MedCamps |

### Step 4: Save Changes

1. After pasting the HTML and updating the subject line, click **Save** at the bottom of the page
2. Repeat for all six email templates
3. Test each template by triggering the corresponding authentication flow

## 🔧 Customisation

### Updating Colours

The templates use MedCamps brand colours. To customise:

- **Primary Green**: `#10b981` (buttons, links, accents)
- **Dark Green**: `#059669` (gradient backgrounds)
- **Text Colours**: `#1f2937` (headings), `#4b5563` (body), `#6b7280` (secondary)

Search and replace these hex codes in the HTML files to match your brand.

### Updating Support Email

The templates reference `support@medcamps.co.uk`. Update this email address in:
- change-email.html
- reset-password.html
- reauthentication.html

### Updating Footer

The footer includes:
\`\`\`
© 2025 MedCamps. All rights reserved.
Empowering future medical professionals
\`\`\`

Update the year and tagline as needed in all template files.

## 🧪 Testing

After implementation, test each email template:

1. **Confirm Signup**: Create a new account
2. **Invite User**: Use the Supabase dashboard to invite a user
3. **Magic Link**: Request a magic link sign-in
4. **Change Email**: Update your email address in account settings
5. **Reset Password**: Use the "Forgot password" flow
6. **Reauthentication**: Perform a sensitive action that requires reauthentication

## 📱 Email Client Compatibility

These templates have been designed to work with:
- Gmail (Desktop & Mobile)
- Outlook (Desktop & Mobile)
- Apple Mail (macOS & iOS)
- Yahoo Mail
- ProtonMail
- Thunderbird
- And most other modern email clients

## 🔒 Security Notes

- All templates include security notices for user awareness
- Links expire according to Supabase's default settings (1 hour for most, 15 minutes for reauthentication)
- Templates encourage users to contact support if they didn't initiate the action

## 📞 Support

If you encounter any issues with the templates:
1. Verify all Supabase variables ({{ .SiteURL }}, {{ .TokenHash }}) are present
2. Check that inline styles are preserved (required for email clients)
3. Test in multiple email clients
4. Ensure your Supabase SMTP settings are configured correctly

## 📄 File Structure

\`\`\`
email-templates/
├── confirm-signup.html
├── invite-user.html
├── magic-link.html
├── change-email.html
├── reset-password.html
├── reauthentication.html
└── README.md (this file)
\`\`\`

## ✅ Checklist

- [ ] Copy all 6 HTML templates to Supabase dashboard
- [ ] Update subject lines for each template
- [ ] Customise colours if needed
- [ ] Update support email address
- [ ] Update footer year and tagline
- [ ] Test all authentication flows
- [ ] Verify emails display correctly in your primary email client
- [ ] Check mobile rendering

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Maintained by**: MedCamps Development Team
