from allauth.account.adapter import DefaultAccountAdapter;

class CustomAccoutAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        user.is_customer = data.get('is_customer')
        user.is_provider= data.get('is_provider')
        user.save()
        return user