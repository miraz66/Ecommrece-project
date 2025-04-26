<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    /**
     * Add to favorites
     */
    public function addToFavorites(Request $request)
    {
        if (!Auth::check()) {
            return redirect('/login')->with('message', 'Please login to add products to favorites');
        }
        $request->validate([
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $product = Product::find($request->product_id);

        $favorite = Favorite::where('user_id', Auth::id())
            ->where('product_id', $product->id)
            ->first();

        if ($favorite) {
            return redirect()->back()->with('message', 'Product already in favorites');
        }

        Favorite::create([
            'user_id' => Auth::id(),
            'product_id' => $product->id,
            'name' => $product->name,
            'image' => $product->image,
            'price' => $product->price,
        ]);
        return redirect()->back()->with('message', 'Product added to favorites successfully');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favorite $favorite)
    {
        $favorite = Favorite::find($favorite->id);

        if ($favorite) {
            $favorite->delete();
            return redirect()->back()->with('message', 'Product removed from favorites successfully');
        } else {
            return redirect()->back()->with('message', 'Product not found in favorites');
        }
    }
}
