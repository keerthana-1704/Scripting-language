class BankAccount
  attr_reader :balance

  def initialize
    @balance = 0.0
  end

  # Method to deposit money
  def add_balance(amount)
    if amount > 0
      @balance += amount
      puts "Successfully deposited $#{amount}. New balance: $#{@balance}."
    else
      puts "Error: Deposit amount must be positive."
    end
  end

  # Method to withdraw money
  def withdraw(amount)
    if amount > 0 && amount <= @balance
      @balance -= amount
      puts "Successfully withdrew $#{amount}. New balance: $#{@balance}."
    elsif amount > @balance
      puts "Error: Insufficient funds."
    else
      puts "Error: Withdrawal amount must be positive."
    end
  end

  # Method to check the balance
  def check_balance
    puts "Current balance: $#{@balance}."
    @balance
  end
end
