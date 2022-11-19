import stripe

stripe.api_key = "sk_test_51Lwr66DVedp1C4OQgbGgvtvnGO5RinKpKR29wp5yd62ULMkB9zEOsFjDh2B8hJdvD33TFl1J3ftE3ocu85qsL29D004ci0SBgT"

stripe.Account.create(
  type="custom",
  country="US",
  email="yelamin2@yahoo.com",
  capabilities={
    "card_payments": {"requested": True},
    "transfers": {"requested": True},
  },
)
