import streamlit as st

import time

import random

st.set_page_config(
    page_title="Python Projects",
    page_icon="🐍",
    layout="centered"
)

st.title("🐍 Python Projects")

project = st.sidebar.selectbox(
    "Choose a project",
    [
        "Home",
        "Countdown Timer",
        "Temperature Converter",
        "Compound Interest Calculator",
        "Shopping Cart Program",
        "Number Guessing Game",
        "Calculator",
        "Rock Paper Scissors",
        "Banking Program",
        "Slot Machine",
        "Encryption Program",
        "Weather API App"
    ]
)

if project == "Home":
    st.header("Welcome")

    st.write(
        "This is a growing collection of small Python projects "
        "I created while learning Python."
    )

elif project == "Countdown Timer":
    # Display the project title.
    st.header("⏳ Countdown Timer")

    # Ask the user how many seconds they want to count down.
    seconds_input = st.number_input(
        "Enter the countdown time (seconds)",
        min_value=1,   # Do not allow zero or negative seconds
        value=10,      # Start with a default of 10 seconds
        step=1         # Increase or decrease by 1 second
    )

    # Start the countdown when the user presses the button.
    if st.button("Start Countdown"):

        # Create an empty area on the page.
        # We will repeatedly replace its contents with the new time.
        timer = st.empty()

        # Count backward from the selected time down to 1.
        for x in range(seconds_input, 0, -1):

            # Find the remaining seconds after complete minutes are removed.
            seconds = x % 60

            # Find the remaining minutes after complete hours are removed.
            minutes = (x // 60) % 60

            # Find the number of complete hours.
            hours = x // 3600

            # Update the same timer area instead of printing a new line.
            # :02 means always show two digits, such as 05 instead of 5.
            timer.markdown(
                f"# {hours:02}:{minutes:02}:{seconds:02}"
            )

            # Pause the program for one second before the next update.
            time.sleep(1)

        # Replace the timer display when the countdown finishes.
        timer.success("🎉 Time's up!")        
        
elif project == "Temperature Converter":
    st.header("Temperature Converter")

    fahrenheit = st.number_input(
        "Enter a temperature in Fahrenheit",
        value=32.0
    )

    if st.button("Convert to Celsius"):
        celsius = (fahrenheit - 32) * 5 / 9
        st.success(f"{fahrenheit}°F is {celsius:.1f}°C")

elif project == "Compound Interest Calculator":
    # Display the project heading.
    st.header("💰 Compound Interest Calculator")

    # Explain what the calculator does.
    st.write(
        "Estimate how much an investment could grow over time "
        "using annual compound interest."
    )

    # Create a form so the calculator waits until the user
    # clicks the submit button before showing errors or results.
    with st.form("compound_interest_form"):

        # Ask the user for the starting investment amount.
        principal = st.number_input(
            "Initial investment ($)",
            min_value=0.0,   # Prevent negative values
            value=None,       # Start the input at zero
            step=100.0       # Increase or decrease by $100
        )

        # Ask the user for the annual interest rate.
        rate = st.number_input(
            "Annual interest rate (%)",
            min_value=0.0,   # Prevent negative interest rates
            value=None,       # Start the input at zero
            step=0.25        # Change the rate by 0.25% at a time
        )

        # Ask the user how many years the money will grow.
        time = st.number_input(
            "Investment period (years)",
            min_value=0,     # Prevent negative years
            value=None,         # Start the input at zero
            step=1           # Only allow whole-year steps
        )

        # Create the button that submits the entire form.
        submitted = st.form_submit_button(
            "Calculate compound interest",
            type="primary",
            use_container_width=True
        )

    # Only validate and calculate after the user presses the button.
    if submitted:

        # Make sure the user entered an investment amount.
        if principal is None:
            st.error("💰 Please enter an initial investment.")

        # Make sure the investment is greater than zero.
        elif principal <= 0:
            st.error("Please enter an initial investment greater than $0.")

        # Make sure the user entered an interest rate.
        elif rate is None:
            st.error("📈 Please enter an interest rate.")

        # Make sure the interest rate is greater than zero.
        elif rate <= 0:
            st.error("Please enter an interest rate greater than 0%.")

        # Make sure the user entered the number of years.
        elif time is None:
            st.error("📅 Please enter an investment period.")

        # Make sure the investment period is at least one year.
        elif time <= 0:
            st.error("Please enter an investment period of at least 1 year.")

        else:
            # Convert the percentage into a decimal.
            # Example: 5% becomes 0.05.
            decimal_rate = rate / 100

            # Calculate the final balance using:
            # A = P(1 + r)^t
            total = principal * pow((1 + decimal_rate), time)

            # Calculate how much of the final balance is interest.
            interest_earned = total - principal

            # Add a divider so the results stand out.
            st.divider()

            # Display a clear results heading.
            st.subheader("📈 Your Results")

            # Create two columns so the main results appear side by side.
            result_column1, result_column2 = st.columns(2)

            # Show the final account balance in the first column.
            with result_column1:
                st.metric(
                    label="Final balance",
                    value=f"${total:,.2f}"
                )

            # Show the total interest earned in the second column.
            with result_column2:
                st.metric(
                    label="Interest earned",
                    value=f"${interest_earned:,.2f}"
                )

            # Display a written summary beneath the result boxes.
            st.success(
                f"After {time} year{'s' if time != 1 else ''}, "
                f"your \\${principal:,.2f} investment could grow "
                f"to \\${total:,.2f}."
            )

            # Show the formula used by the calculator.
            st.subheader("Formula Used")
            st.latex(r"A = P(1 + r)^t")

            # Explain what each part of the formula means.
            st.markdown(
                """
                - **A** = final balance
                - **P** = initial investment
                - **r** = annual interest rate as a decimal
                - **t** = number of years
                """
            )

elif project == "Shopping Cart Program":

    st.header("🛒 Shopping Cart Program")

    # Create the shopping cart the first time the app runs.
    if "foods" not in st.session_state:
        st.session_state.foods = []

    if "prices" not in st.session_state:
        st.session_state.prices = []

    # User inputs.
    food = st.text_input("Food")

    price = st.number_input(
        "Price ($)",
        min_value=0.00,
        step=0.01,
        format="%.2f"
    )

    # Add an item.
    if st.button("Add to Cart"):

        if food != "":
            st.session_state.foods.append(food)
            st.session_state.prices.append(price)

    st.divider()

    st.subheader("🛍️ Your Cart")

    total = 0

    if len(st.session_state.foods) == 0:

        st.write("Your cart is empty.")

    else:

        for food, price in zip(
            st.session_state.foods,
            st.session_state.prices
        ):

            st.write(f"**{food}** — ${price:.2f}")
            total += price

        st.divider()

        st.success(f"Total: ${total:.2f}")

    # Clear everything.
    if st.button("Clear Cart"):

        st.session_state.foods = []
        st.session_state.prices = []

        st.rerun()

elif project == "Number Guessing Game":
    st.header("Number Guessing Game")

    # Create the secret number once
    if "secret_number" not in st.session_state:
        st.session_state.secret_number = random.randint(1, 100)
        st.session_state.guesses = 0

    guess = st.number_input(
        "Guess a number between 1 and 100",
        min_value=1,
        max_value=100,
        step=1
    )

    if st.button("Guess"):

        st.session_state.guesses += 1

        if guess < st.session_state.secret_number:
            st.warning("Too low!")

        elif guess > st.session_state.secret_number:
            st.warning("Too high!")

        else:
            st.success(
                f"Correct! You got it in "
                f"{st.session_state.guesses} guesses!"
            )

    if st.button("New Game"):
        st.session_state.secret_number = random.randint(1, 100)
        st.session_state.guesses = 0
        st.rerun()

elif project == "Calculator":
    st.header("Calculator")

    # Get the two numbers
    num1 = st.number_input(
        "What is your first number?",
        value=0.0
    )

    num2 = st.number_input(
        "What is your second number?",
        value=0.0
    )

    # Let the user choose an operator
    operator = st.selectbox(
        "What is your operator?",
        ["+", "-", "*", "/"]
    )

    # Only calculate when the button is clicked
    if st.button("Calculate"):

        if operator == "+":
            answer = num1 + num2

        elif operator == "-":
            answer = num1 - num2

        elif operator == "*":
            answer = num1 * num2

        elif operator == "/" and num2 == 0:
            st.error("Invalid: you cannot divide by zero.")
            answer = None

        elif operator == "/":
            answer = num1 / num2

        # Display the answer only if one was calculated
        if answer is not None:
            st.success(
                f"{num1} {operator} {num2} = {answer:.2f}"
            )

elif project == "Rock Paper Scissors":
    st.header("Rock Paper Scissors")

    # Let the user choose rock, paper, or scissors
    userChoice = st.selectbox(
        "Pick one:",
        ["rock", "paper", "scissors"]
    )

    # Run the game when the button is clicked
    if st.button("Play"):

        # The computer makes a random choice
        computerChoice = random.choice(
            ["rock", "paper", "scissors"]
        )

        # Show the computer's choice
        st.write(f"The computer chose: {computerChoice}")

        # Check whether the user won
        if userChoice == "rock" and computerChoice == "scissors":
            st.success("You win!")

        elif userChoice == "paper" and computerChoice == "rock":
            st.success("You win!")

        elif userChoice == "scissors" and computerChoice == "paper":
            st.success("You win!")

        # Check for a tie
        elif userChoice == computerChoice:
            st.warning("Tie!")

        # Any remaining combination is a loss
        else:
            st.error("You lose!")

elif project == "Banking Program":
    st.header("Coming Soon!")

elif project == "Slot Machine":
    st.header("Coming Soon!")
   
elif project == "Encryption Program":
    st.header("Coming Soon!")

elif project == "Weather API App":
    st.header("Coming Soon!")
