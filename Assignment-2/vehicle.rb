# Superclass for all vehicles
class Vehicle
  attr_accessor :fuel_level, :mileage

  def initialize(fuel_level, mileage)
    @fuel_level = fuel_level
    @mileage = mileage
  end

  def calculate_mileage(distance_traveled, fuel_used)
    @mileage = distance_traveled / fuel_used
    puts "Mileage is #{@mileage} km per liter."
  end

  def check_fuel_level
    puts "Current fuel level: #{@fuel_level} liters."
  end

  def perform_maintenance
    puts "Performing general maintenance on the vehicle."
  end
end

# Subclass for Car
class Car < Vehicle
  attr_accessor :trunk_size

  def initialize(fuel_level, mileage, trunk_size)
    super(fuel_level, mileage)  # Call superclass initializer
    @trunk_size = trunk_size
  end

  def perform_maintenance
    super  # Call the superclass method first
    puts "Performing car-specific maintenance tasks."
  end
end

# Subclass for Truck
class Truck < Vehicle
  attr_accessor :cargo_capacity

  def initialize(fuel_level, mileage, cargo_capacity)
    super(fuel_level, mileage)
    @cargo_capacity = cargo_capacity
  end

  def perform_maintenance
    super
    puts "Performing truck-specific maintenance tasks, such as inspecting cargo load."
  end
end

# Subclass for Motorcycle
class Motorcycle < Vehicle
  attr_accessor :helmet_storage

  def initialize(fuel_level, mileage, helmet_storage)
    super(fuel_level, mileage)
    @helmet_storage = helmet_storage
  end

  def perform_maintenance
    super
    puts "Performing motorcycle-specific maintenance tasks, such as checking tire pressure."
  end
end