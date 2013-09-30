---
layout: article
title: Understanding attr_accessor in Ruby
categories: notes

published: true

---

Let’s get a good solid understanding of Ruby's attr_accessor instance method. It’s a powerful method, but it can be tricky to understand. Let’s keep it simple.

The most helpful way of understanding attr_accessor will be to write the code we would have to write if attr_accessor didn't exist. So let's write out some bad, stupid code, then use attr_accessor to make it better code! Let's say we have a class called:

    class Dog
    end

...and we want to be able to define two attributes of Dog that will let us describe his name. All dogs need a name, after all. Here's how that would look:

    class Dog

      def name
        @name
      end

    end

Great! Now we've defined the dog's name, setting an instance variable for it that we can use to define it's value. Let's run our little program and see what happens:

    dog = Dog.new
    dog.name # => nil (This is expected. We haven't defined our instance variable yet!)
    dog.name = "Fido" # => NoMethodError

Whoah - the boss isn't going to like that one. Why did we get a "NoMethodError"? Well, we set an instance variable called @name, and we can read it, but we don't actually have the power to define it from outside the name method. Let's fix that!

    class Dog

      def name
        @name
      end

      def name=(input)
        @name = input
      end

    end

Let's run that and see what happens:

    dog = Dog.new
    dog.name = "Fido" # => "Fido"

Great! We defined name with the instance variable @name, and we gave ourselves the power to write to it by defining name=(foo). That works, but we can do better!

    class Dog
      attr_reader :name
      attr_writer :name
    end

Using attr_reader and attr_accessor, we've recreated the exact working code as before. This will run with the same success as our previous bit of code. Since we're lazy and love saving time, let's use attr_accessor to combine the attr_reader and attr_accessor commands into one:

    class Dog
      attr_accessor :name
    end

That's it! Using attr_accessor is a shortcut to create an instance variable, allow it to be read, and allow it to be written to.