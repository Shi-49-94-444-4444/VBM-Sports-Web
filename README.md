# Brand Test UI Documentation

This is a brand test used for viewing the UI directly. All data is sample data, middleware, loading and a few feature (SSR, SSG, router, ...) has been applied for convenient usage.

## Installation and Usage

To install the necessary libraries, run:

```sh
npm i --force
```

Run project with dev, run:

```sh
npm run dev
```

Run project to use, run:

```sh
npm run build
npm run start
```

## Note

The website is fully responsive and customizable
Role: Guest, User, Staff, Admin
Because this is a UIview test, it is not possible to see the pages that will change according to role and the detailed functions of each page according to role.

## Router URLs

You can directly route to the following URLs:

- `/`: Home page
- `/login`: Login page
- `/register`: Registration page
- `/forgot-password`: Registration page
- `/verify-otp`: Verify page (for after register and forgot-password)
- `/register-stepper`:  Register stepper page (for after verify to about of you)
- `/forgot-password-success`: Forgot password success page (for after verity-otp with forgot password to success)
- `/unauthorized`: Not allow page
- `/404`: 404 page
- `/500`: 404 page
- `/policy`: policy page
- `/product/detail-product/[id]`: Detail product page (Example: /product/detail-product/101, /product/detail-product/102, /product/detail-product/103)
- `/product/list-product`: List product page
- `/product/management-product`: Management product page (Management post product)
- `/product/post-product`: Post product page
- `/user/setting-profile`: Setting profile page (slide-page, can slide setting-notify, setting-security, setting-ban)
- `/user/chat-room`: Message page (realtime, can use it after order slot in product) (in view UI don't used)
- `/user/profile-user/[id]`: Profile user page (Example: /user/profile-user/user1, /user/profile-user/user2, /user/profile-user/user3)
- `/transaction/list-transaction`: List transaction page 
- `/transaction/detail-transaction/[id]`: Detail transaction page (Example: /transaction/detail-transaction/transaction1, /transaction/detail-transaction/transaction2)
- `admin/admin-home`: Global management page (slide-page with any admin page)
- `admin/post-management`: Blog management page (slide-page with any admin page, blog management)
- `admin/create-blog`: Create blog page (slide-page with any admin page, button show with role staff in admin/post-management)
- `admin/user-report-management`: Report management page (slide-page with any admin page, about: report blog, report post, report user)
- `admin/user-management`: User management page (slide-page with any admin page, user management)
- `admin/report-management`: Income statement management page (slide-page with any admin page, income statement)
- `admin/rule-list`:  Policy page (slide-page with any admin page)
- `admin/user-detail-management/[id]`:  Detail user management page (slide-page with any admin page, detail user, product management, any modal feature)
- `admin/user-report-detail/[id]`:  Detail report page (slide-page with any admin page, detail report follow report user - post - blog, any modal feature)
+++ Any modal in page

Turned off loading fail data and error api 

## Notes

1. The data on these pages is sample data for UI display purposes only.
2. Middleware has been configured for ease of use and UI testing.
3. Please ensure to check the URLs and middleware before actual deployment.

Thank you for using this brand test!
