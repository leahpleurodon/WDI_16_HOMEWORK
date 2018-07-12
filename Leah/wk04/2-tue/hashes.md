# Array and Hash access

### A. Given the following data structure:

```ruby
a = ["Anil", "Erik", "Jonathan"]
```

1. How would you return the string `"Erik"`?

```ruby
    a[1]
```

1. How would you add your name to the array?

```ruby
    a.push("Leah")
```

### B. Given the following data structure:

```ruby
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
```

1. How would you return the string `"One"`?

```ruby
    h[1]
```

1. How would you return the string `"Two"`?

```ruby
    h[:two]
```

1. How would you return the number `2`?

```ruby
    h["two"]
```

1. How would you add `{3 => "Three"}` to the hash?

```ruby
    h[3] = "Three"
```

1. How would you add `{:four => 4}` to the hash?

```ruby
    h[:four] = 4
```

### C. Given the following data structure:

```ruby
is = {true => "It's true!", false => "It's false"}
```

1. What is the return value of `is[2 + 2 == 4]`?

```
    "It's True!"
```

1. What is the return value of `is["Erik" == "Jonathan"]`?

```
    "It's False!"
```

1. What is the return value of `is[9 > 10]`?
```
    "It's False!"
```
1. What is the return value of `is[0]`?
```
    nil
```
1. What is the return value of `is["Erik"]`?
```
    nil
```

### D. Given the following data structure:

```ruby
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  }
}
```

1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?

```ruby
    users["Johnathan"][:twitter]
```

1. How would you add the number `7` to Erik's favorite numbers?

```ruby
    users["Erik"][:favourite_numbers].push(7)
```

1. How would you add yourself to the users hash?

```ruby
    users["Leah"] = {
    :twitter => "leahpleurodon",
    :favorite_numbers => [13, 0],
  }
```

1. How would you return the array of Erik's favorite numbers?

```ruby
    users["Erik"][:favourite_numbers]
```

1. How would you return the smallest of Erik's favorite numbers?

```ruby
    users["Erik"][:favourite_numbers].sort.first
```

1. How would you return an array of Anil's favorite numbers that are also even?

```ruby
    users["Anil"][:favourite_numbers].select { |num| num.even? }
    ##users["Anil"][:favourite_numbers].select(:&)
```

1. How would you return an array of the favorite numbers common to all users?

```ruby
    all_fav_nums =[]
    users.each do |key_name, data|
        all_fav_nums.push(data[:favorite_numbers])
    end
    all_fav_nums.inject(:&)

    #or

    users.values.map { |hash| hash[:favorie_numbers] }.flatten.uniq.sort



```

1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

```ruby
    all_fav_nums =[]
    users.each do |key_name, data|
        all_fav_nums.push(data[:favorite_numbers])
    end
    all_fav_nums.inject(:|).sort
```