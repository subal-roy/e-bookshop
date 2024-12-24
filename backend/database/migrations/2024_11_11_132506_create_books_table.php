<?php

use App\Models\BookCategory;
use App\Models\Vendor;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(BookCategory::class)
                ->constrained()
                ->onDelete('cascade');
            $table->foreignIdFor(Vendor::class)
                ->constrained()
                ->onDelete('cascade');
            $table->string('name');
            $table->string('isbn')->unique();
            $table->text('description');
            $table->string('image')->nullable();
            $table->decimal('price', 8, 2);
            $table->integer('page_count')->nullable();
            $table->enum('format', ['Hardcover', 'Paperback', 'eBook', 'Audiobook'])
                ->default('Paperback');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
