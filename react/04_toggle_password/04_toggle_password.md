# Problem name: Toggle Password

## Companies:

#tcs #amazon

## Requirement:

- The input must:
  Securely accept user-entered text. Have a placeholder: "Enter password". Be focusable and editable at all times. Always show the placeholder text when empty.
- By default:
  Password should be hidden (masked).
- Visibility toggle icon:
  Uses lucide-react icons. Shows Eye icon when the password is hidden. Shows Eyeoff icon when the password is visible.
- On clicking the icon:
  Toggle the visibility of the password between masked and unmasked. Instantly update both: The icon (Eye EyeOff). The label (described below).
- A label must appear below the input field showing:
  "Password Hidden" when the password is masked.
  "Password Visible" when the password is unmasked.

## Data Test IDs (Required for Testing)

- data-testid="password-input": The password input field
- Element wrapping the eye icon used to toggle password visibility
- Text label showing whether password is visible or hidden

## Reference UI:

![toggle-password](https://do6gp1uxl3luu.cloudfront.net/question-gif/togglePassword.gif)
